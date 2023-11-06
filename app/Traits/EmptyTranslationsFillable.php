<?php

namespace App\Traits;

trait EmptyTranslationsFillable
{
    public function fillEmptyWithDefault($localeId, $defaultLocaleId, $fields)
    {
        $withLocale = $this->translations
            ->where('locale_id', $localeId)
            ->first();
        if (!$withLocale) {
            $withLocale = [];
        } else {
            $withLocale = $withLocale->toArray();
        }
        $withDefLocale = $this->translations
            ->where('locale_id', $defaultLocaleId)
            ->first()
            ->toArray();

        collect($fields)
            ->each(function ($field) use ($withLocale, $withDefLocale) {
                $this->{$field} = $withLocale[$field] ?? $withDefLocale[$field] ?? '';
            });

        return $this;
    }
}
