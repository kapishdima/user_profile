<?php

namespace App\Services\API;

use App\Models\Media;
use Illuminate\Support\Facades\Storage;

class MediaService
{
    protected $model;

    public function __construct(
        protected TranslationsService $translationsService,
        protected UploadService $uploadService,
    ) {
        $this->model = Media::class;
    }

    public function store(array $data, $file): Media
    {
        $data['translations'] = $this->translationsService->transformFrom(collect($data)
            ->only(Media::TRANSLATABLE)
            ->toArray());

        $medias = $this->uploadService->upload($file);

        $data = collect($data)
            ->merge($medias)
            ->merge([
                'name' => $data['translations']['name'] ?? '',
            ])
            ->toArray();

        $media = Media::create($data);
        $this->translationsService->create(
            $media->id,
            $data['translations']['translations'],
            $this->model
        );

        return $media;
    }

    public function update(Media $media, array $data, $file): Media
    {
        $data['translations'] = $this->translationsService->transformFrom(collect($data)
            ->only(Media::TRANSLATABLE)
            ->toArray());


        Storage::delete($media->path);
        Storage::delete($media->compressed_path);

        $medias = $this->uploadService->upload($file);

        $data = collect($data)
            ->merge($medias)
            ->merge([
                'name' => $data['translations']['name'] ?? '',
            ])
            ->toArray();

        $media->update($data);

        $this->translationsService->update(
            $media->id,
            $data['translations']['translations'],
            $this->model
        );

        $media = Media::find($media->id);

        return $media;
    }
}
