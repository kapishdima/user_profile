<?php

namespace App\Services\API;

use App\Models\SeoData;

class SeoDataService
{
    protected $model;

    public function __construct(
        protected TranslationsService $translationsService,
    ) {
        $this->model = SeoData::class;
    }

    public function prepareTranslation(array $translatableFields, array $data)
    {
        return $this->translationsService->transformFrom(collect($data)
            ->only($translatableFields)
            ->toArray());
    }

    public function store(array $data): SeoData
    {
        $data['translations'] = $this->prepareTranslation(SeoData::TRANSLATABLE, $data);

        $seoData = SeoData::create([
            'title' => $data['translations']['title'] ?? '',
            'description' => $data['translations']['description'] ?? '',
            'keywords' => $data['translations']['keywords'] ?? '',
            'og_title' => $data['translations']['og_title'] ?? '',
            'og_description' => $data['translations']['og_description'] ?? '',
            'media_id' => $data['media_id'] ?? null,
            'slug' => $data['slug'],
        ]);

        $this->translationsService->create(
            $seoData->id,
            $data['translations']['translations'],
            $this->model
        );

        return $seoData;
    }

    public function update(SeoData $seoData, array $data): SeoData
    {
        $data['translations'] = $this->translationsService->transformFrom(collect($data)
            ->only(SeoData::TRANSLATABLE)
            ->toArray());

        $seoData->update([
            'title' => $data['translations']['title'] ?? '',
            'description' => $data['translations']['description'] ?? '',
            'keywords' => $data['translations']['keywords'] ?? '',
            'og_title' => $data['translations']['og_title'] ?? '',
            'og_description' => $data['translations']['og_description'] ?? '',
            'media_id' => $data['media_id'] ?? null,
            'slug' => $data['slug'],
        ]);

        $this->translationsService->update(
            $seoData->id,
            $data['translations']['translations'],
            $this->model
        );

        $seoData = SeoData::find($seoData->id);

        return $seoData;
    }
}
