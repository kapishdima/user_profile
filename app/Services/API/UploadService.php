<?php

namespace App\Services\API;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;

class UploadService
{
    public $permissionService;

    public function __construct()
    {
        if (!file_exists(storage_path('app/public/uploads/compressed'))) {
            mkdir(storage_path('app/public/uploads/compressed'), 755, true);
        }
    }

    public function upload($file)
    {
        $extensions = ['jpeg', 'jpg', 'png'];
        $extension = $file->getClientOriginalExtension();

        $path = $file->store('uploads');

        if (!in_array($extension, $extensions) || $extension == 'gif') {
            return [
                'path' => Storage::url($path),
                'compressed_path' => '',
            ];
        }

        $manager = new ImageManager();
        $image = $manager->make(Storage::get($path));

        $image->resize(800, null, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });

        $pathinfo = pathinfo($path);

        $compressedPath = $pathinfo['dirname']
            . '/compressed/' . $pathinfo['filename']
            . '.compressed'
            . '.' . $pathinfo['extension'];

        $image->save(storage_path('app/public/' . $compressedPath));

        return [
            'path' => Storage::url($path),
            'compressed_path' => Storage::url($compressedPath),
        ];
    }
}
