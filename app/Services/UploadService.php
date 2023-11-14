<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
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

    public function uploadFile($file, $disk = null)
    {
        if ($disk) {
            $path = $file->store('uploads', $disk);
            $url = $path;

        } else {
            $path = $file->store('uploads');
            $url = Storage::url($path);
        }

        return [
            'file' => $url,
        ];

    }

    public function uploadFiles($files)
    {

        \Log::debug($files);
        foreach ($files as $file) {

            $paths[] = [
                'file' => Storage::url($file->store('uploads')),
                'name' => $file->getClientOriginalName(),
                'type' => $file->getClientOriginalExtension(),
            ];
        }

        return $paths;
    }

    public function uploadVideo($file)
    {
        $path = $file->store('uploads');

        return [
            'video' => Storage::url($path),
        ];
    }

    public function uploadImage($file)
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
            .'/compressed/'.$pathinfo['filename']
            .'.compressed'
            .'.'.$pathinfo['extension'];

        $image->save(storage_path('app/public/'.$compressedPath));

        return [
            'path' => Storage::url($path),
            'compressed_path' => Storage::url($compressedPath),
        ];
    }

    public function uploadImageWithOrientation($file)
    {
        $media = Image::make($file);
        $imageName = uniqid(date('YmdHis')).'.'.$file->getClientOriginalName();
        $media->trim();
        $res = $media->orientate()->stream()->detach();

        Storage::put('uploads/'.$imageName, $res, 'public');

        $orientation = $media->exif('Orientation');

        if (!$orientation) {
            $media->orientate();
        }

        return ['file' => Storage::url('uploads/'.$imageName)];
    }
}
