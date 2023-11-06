<?php

require dirname(__DIR__) . '/vendor/autoload.php';
require dirname(__DIR__) . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

use App\Models\Phrase;

use App\Models\Project;

use App\Models\SeoData;

use App\Models\Setting;

use App\Models\Translation;

class AdHocTranslation
{
    public function createProjectTranslations()
    {
        $projects = Project::all()->map(function ($item) {
            foreach (Project::TRANSLATABLE as $field) {
                foreach (['uk', 'en'] as $locale) {
                    Translation::create([
                        'field_name' => $field,
                        'locale' => $locale,
                        'text' => $item->toArray()[$field],
                        'translatable_id' => $item->id,
                        'translatable_type' => 'App\Models\Project',
                    ]);
                }
            }

            $content = $item->content ? json_decode($item->content, true) : [];
            $newContent = [];
            foreach ($content as $field) {
                foreach ($field as $key => $value) {
                    if (in_array($key, ['title', 'subtitle', 'text'])) {
                        $field[$key] = [
                            'ru' => $value,
                            'en' => $value,
                            'uk' => $value,
                        ];
                    }
                }
                $newContent[] = $field;
            }
            $item->content = json_encode($newContent);
            Project::where('id', $item->id)->update($item->toArray());
            var_dump($item->name);
        });
    }

    public function createOtherTranslations()
    {
        $settings = Setting::all()->map(function ($item) {
            foreach (Setting::TRANSLATABLE as $field) {
                foreach (['uk', 'en'] as $locale) {
                    Translation::create([
                        'field_name' => $field,
                        'locale' => $locale,
                        'text' => $item->toArray()[$field],
                        'translatable_id' => $item->id,
                        'translatable_type' => 'App\Models\Settings',
                    ]);
                }
            }
        });

        $seoData = SeoData::all()->map(function ($item) {
            foreach (SeoData::TRANSLATABLE as $field) {
                foreach (['uk', 'en'] as $locale) {
                    Translation::create([
                        'field_name' => $field,
                        'locale' => $locale,
                        'text' => $item->toArray()[$field],
                        'translatable_id' => $item->id,
                        'translatable_type' => 'App\Models\SeoData',
                    ]);
                }
            }
        });
        $phrases = Phrase::all()->map(function ($item) {
            foreach (Phrase::TRANSLATABLE as $field) {
                foreach (['uk', 'en'] as $locale) {
                    Translation::create([
                        'field_name' => $field,
                        'locale' => $locale,
                        'text' => $item->toArray()[$field],
                        'translatable_id' => $item->id,
                        'translatable_type' => 'App\Models\Phrase',
                    ]);
                }
            }
        });
    }

    public function substituteDev($str = '')
    {
        return str_replace('http://dev.', 'https://', $str);
    }

    public function renameImages()
    {
        $projects = Project::all()->map(function ($item) {
            $content = $item->content ? json_decode($item->content, true) : [];
            $newContent = [];
            foreach ($content as $field) {
                foreach ($field as $key => $value) {
                    if (in_array($key, ['image', 'imageRight', 'imageLeft'])) {
                        $field[$key] = $this->substituteDev($field[$key]);
                        var_dump($key);
                        var_dump($field[$key]);
                    }
                }
                $newContent[] = $field;
            }

            $item->content = json_encode($newContent);
            $item->image = $this->substituteDev($item->image);
            var_dump($item->toArray()['image']);
            Project::where('id', $item->id)->update($item->toArray());
        });
    }
}

$tr = new AdHocTranslation();

$tr->createProjectTranslations();
$tr->createOtherTranslations();
$tr->renameImages();
