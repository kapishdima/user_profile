<?php

namespace App\Http\Controllers;

use App\Http\Requests\FileUploadRequest;
use App\Services\UploadService;

class FileUploadController extends Controller
{
    public function __construct(private UploadService $uploadService)
    {

    }

    public function store(FileUploadRequest $request)
    {
        $file = $request->file('file');

        $data = $this->uploadService->uploadFile($file);

        return response()->json($data);
    }

    public function storeLocally(FileUploadRequest $request)
    {
        $file = $request->file('file');

        $data = $this->uploadService->uploadFile($file, 'public');

        return response()->json($data);
    }

    public function storeOrientate(FileUploadRequest $request)
    {
        $file = $request->file('file');

        $data = $this->uploadService->uploadImageWithOrientation($file);

        return response()->json($data);
    }
}
