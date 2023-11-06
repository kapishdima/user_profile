<?php

namespace App\Services\API;

use App\Models\Locale;
use App\Models\Translation;
use App\Services\Cache\CacheServiceInterface;
use Illuminate\Database\Eloquent\Model;

class TranslationsService
{
    public function __construct(protected CacheServiceInterface $cacheService)
    {
    }

    public function transformTo($translations, $defaultFields)
    {
        $locales = $this->cacheService->getLocales();
        $defaulLocaleId = $this->cacheService->getDefaultLocaleId();

        $defautlData = collect($defaultFields)
            ->map(fn ($fieldValue, $fieldName) => [
                'locale_id' => $defaulLocaleId,
                'field' => $fieldName,
                'text' => $fieldValue,
            ])
            ->values()
            ->toArray();

        $allData = [...$defautlData, ...$translations];

        $newTr = collect($allData)
            ->groupBy('field')
            ->map(
                fn ($fieldArray) => $fieldArray
                    ->mapWithKeys(
                        fn ($item) => [$item['locale_id'] => $item['text']]
                    )
            )
            ->toArray();

        return $newTr;
    }

    public function transformFrom($data)
    {
        $defaulLocaleId = $this->cacheService->getDefaultLocaleId();

        $newStructure = collect($data)
            ->map(function ($fieldValue, $fieldName) use ($defaulLocaleId) {
                return $fieldValue[$defaulLocaleId];
            })
            ->toArray();

        $newStructure['translations'] = collect($data)
            ->map(function ($value, $name) use ($defaulLocaleId) {
                return collect($value)
                    ->map(function ($fieldValue, $locale_id) use ($defaulLocaleId, $name) {
                        if ($locale_id !== $defaulLocaleId) {
                            return [
                                'field' => $name,
                                'text' => $fieldValue,
                                'locale_id' => $locale_id,
                            ];
                        }
                    })
                    ->filter(function ($value) {
                        return $value !== null;
                    })
                    ->toArray();
            })
            ->flatten(1)
            ->toArray();

        return $newStructure;
    }

    public function translationResourse($translations, $model, $resource)
    {
        $translatedFields = $this->transformTo(
            $translations,
            collect($resource->toArray())->only($model::TRANSLATABLE)->toArray()
        );

        return $translatedFields;
    }

    public function create(int $id, array $translations, $model): void
    {
        foreach ($translations as $translation) {
            Translation::create([
                'field' => $translation['field'],
                'text' => $translation['text'],
                'locale_id' => $translation['locale_id'],
                'translatable_id' => $id,
                'translatable_type' => $model,
            ]);
        }
    }

    public function update(int $id, array $translations, $model): void
    {
        foreach ($translations as $translation) {
            Translation::updateOrCreate([
                'field' => $translation['field'],
                'locale_id' => $translation['locale_id'],
                'translatable_id' => $id,
                'translatable_type' => $model,
            ], [
                'text' => $translation['text'],
            ]);
        }
    }

    public function transform(Model $entity, Locale $locale): array
    {
        $result = $entity->toArray();

        $translatableFields = defined($entity::class.'::TRANSLATABLE') ? $entity::TRANSLATABLE : [];
        foreach ($translatableFields as $key) {
            foreach ($entity->translations as $translation) {
                if ($translation->field === $key && $translation->locale_id === $locale->id) {
                    $result[$key] = $translation->text;
                }
            }
        }

        return $result;
    }

    public function get(?Model $entity, Locale $locale): array
    {
        if (empty($entity)) {
            return [];
        }

        if ($locale->name === Locale::DEFAULT_LOCALE) {
            return $entity->toArray();
        }

        $result = $this->transform($entity, $locale);

        $relations = [];
        foreach ($entity->getRelations() as $relation) {
            if (is_a($relation, Model::class)) {
                $relation = collect([$relation]);
            }

            foreach ($relation as $entity) {
                $relations[$entity->table][] = $this->transform($entity, $locale);
            }
        }

        return array_merge($result, $relations);
    }
}
