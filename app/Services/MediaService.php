<?php

namespace App\Services;

use App\Http\Resources\MediaResource;
use App\Models\Media;
use App\Services\UploadService;
use Illuminate\Support\Facades\Storage;

class MediaService
{
    protected $model;

    public function __construct(
        protected UploadService $uploadService,
    ) {
        $this->model = Media::class;
    }

    public function store(array $data): Media
    {
        $file = $this->uploadService->uploadImage($data['file']);

        $media = Media::create($file);

        return $media;
    }

    public function update(Media $media, array $data, $file): Media
    {

        $isExistingPath = is_string($data['file']);
        $file = $isExistingPath
            ? $data['file']
            : $this->uploadService->uploadImage($data['file']);

        $media->update($file);

        $media = Media::find($media->id);

        return $media;
    }

    public function destroy($mediaId): bool
    {
        $media = Media::find($mediaId);

        if (!$media) {
            return null;
        }
        if ($media->video) {
            Storage::delete($media->video);
        }
        if ($media->path) {
            Storage::delete($media->path);
        }
        if ($media->compressed_path) {
            Storage::delete($media->compressed_path);
        }

        $media->delete();

        return true;
    }

    public function resourceOrNull($value)
    {
        if (!$value) {
            return null;
        }
        $media = Media::find($value);

        return $media ? new MediaResource($media) : null;
    }
}
