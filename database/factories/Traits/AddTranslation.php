<?php

namespace Database\Factories\Traits;

use App\Models\Locale;
use App\Models\Translation;

trait AddTranslation
{
    public function addTranslation($model)
    {
        $languages = Locale::translated()->get();

        $languages
            ->crossJoin($model::TRANSLATABLE)
            ->map(function ($data) use ($model) {
                [$lang, $prop] = $data;
                Translation::create([
                    'locale_id' => $lang->id,
                    'text' => $this->faker->sentence(),
                    'field' => $prop,
                    'translatable_id' => $model->id,
                    'translatable_type' => get_class($model),
                ]);
            });
    }
}
