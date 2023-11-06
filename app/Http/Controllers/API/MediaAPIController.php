<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\CreateMediaAPIRequest;
use App\Http\Requests\API\UpdateMediaAPIRequest;
use App\Http\Resources\MediaResource;
use App\Models\Media;
use App\Services\API\MediaService;
use App\Services\API\PermissionService;
use Illuminate\Http\Request;

class MediaAPIController extends Controller
{
    public function __construct(
        protected MediaService $mediaService,
        protected PermissionService $permissionService,
    ) {
    }

    public function index(Request $request)
    {
        $input = $request->all();

        return MediaResource::collection(
            Media::with([
                'translations',
            ])
                ->orderBy($request['sortBy'] ?? 'updated_at', $request['sort'] ?? 'desc')
                ->filter($input)
                ->paginateFilter($input['per_page'] ?? 15)
        );
    }

    public function show($id)
    {
        $item = Media::with([
            'translations',
        ])
            ->find($id);

        if (!$item) {
            abort(404, 'No such element');
        }

        return new MediaResource($item);
    }

    public function store(CreateMediaAPIRequest $request): MediaResource
    {
        $data = $request->validated();

        $result = $this->mediaService->store($data, $request->file('file'));

        return new MediaResource($result);
    }

    public function update(UpdateMediaAPIRequest $request, $id): MediaResource
    {
        $media = Media::find($id);

        if (!$media) {
            abort(404, 'No such media');
        }

        $data = $request->validated();

        $result = $this->mediaService->update($media, $data, $request->file('file'));

        return new MediaResource($result);
    }

    public function destroy($id)
    {
        $item = Media::find($id);

        if (!$item) {
            abort(404, 'No such element');
        }

        $item->delete();

        return response()->json(null, 204);
    }
}
