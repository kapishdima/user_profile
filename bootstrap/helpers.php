<?php

use App\Models\Media;
use Illuminate\Support\Facades\Vite;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

if (!function_exists('locUrl')) {
    function locUrl($url)
    {
        return LaravelLocalization::localizeUrl($url);
    }
}

if (!function_exists('viteAsset')) {
    function viteAsset($url)
    {
        return Vite::asset($url, 'build/front');
    }
}

if (!function_exists('useFrontStyles')) {
    function useFrontStyles()
    {
        return Vite::useBuildDirectory('build/front')->withEntryPoints('resources/sass/app.scss');
    }
}
if (!function_exists('useFrontJS')) {
    function useFrontJS()
    {
        return Vite::useBuildDirectory('build/front')->withEntryPoints(['resources/js/front/app.js', 'resources/js/front/preloader/index.js']);
    }
}

if (!function_exists('useJsAssets')) {
    function useJsAssets()
    {
        return Vite::useBuildDirectory('build/js')->withEntryPoints('resources/js/index.tsx');
    }
}

if (!function_exists('getImage')) {
    function getImage($entity, $field = 'image', $mediaField = 'compressed_path')
    {
        if ($field === 'media_id') {
            $image = isset($entity[$field]) ? Media::where('id', $entity[$field])->first() : null;
            $path = $image ? $image[$mediaField] : '';
            if (!$path) {
                $path = $image ? $image['path'] : '';
            }

            return $path;
        }
        $entity = is_array($entity) ? $entity : $entity->toArray();
        $path = isset($entity[$field]) && $entity[$field]
        ? $entity[$field][$mediaField] : '';
        if (!$path) {
            $path = isset($entity[$field]) && $entity[$field]
            ? $entity[$field]['path'] : '';
        }

        return $path;
    }
}
