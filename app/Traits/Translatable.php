<?php

namespace App\Traits;

use App\Models\Locale;
use App\Models\Translation;

trait Translatable
{
    public function translations()
    {
        return $this->morphMany(Translation::class, 'translatable');
    }

    public function getTranslatables($props = [])
    {
        $locale = \App::getLocale();
        $lang = Locale::where('lang', $locale)->first();

        $translations = $this
            ->translations
            ->where('locale_id', (string)$lang->id)
            ->reduce(function ($acc, $translation) use ($props) {
                if (in_array($translation->prop, $props)) {
                    $acc[] = [$translation->prop, $translation->value];
                }

                return $acc;
            }, []);

        return collect($translations)->fromPairs()->toArray();
    }
}
