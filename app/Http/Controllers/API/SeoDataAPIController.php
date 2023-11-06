<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\CreateSeoDataAPIRequest;
use App\Http\Requests\API\UpdateSeoDataAPIRequest;
use App\Http\Resources\SeoDataResource;
use App\Models\SeoData;
use App\Services\API\PermissionService;
use App\Services\API\SeoDataService;
use Illuminate\Http\Request;

class SeoDataAPIController extends Controller
{
    public function __construct(
        protected SeoDataService $seoDataService,
        protected PermissionService $permissionService,
    ) {
    }

    public function index(Request $request)
    {
        $input = $request->all();

        return SeoDataResource::collection(
            SeoData::with(['translations'])
            ->orderBy($request['sortBy'] ?? 'updated_at', $request['sort'] ?? 'desc')->filter($input)
            ->paginateFilter($input['per_page'] ?? 15)
        );
    }

    public function show($id)
    {
        $item = SeoData::with(['translations'])->find($id);

        if (!$item) {
            abort(404, 'No such element');
        }

        return new SeoDataResource($item);
    }

    public function store(CreateSeoDataAPIRequest $request): SeoDataResource
    {
        $data = $request->validated();

        $result = $this->seoDataService->store($data);

        return new SeoDataResource($result);
    }

    public function update(UpdateSeoDataAPIRequest $request, int $id): SeoDataResource
    {
        $seoData = SeoData::find($id);

        if (!$seoData) {
            abort(404, 'No such element');
        }

        $data = $request->validated();

        $result = $this->seoDataService->update($seoData, $data);

        return new SeoDataResource($result);
    }

    public function destroy($id)
    {
        $item = SeoData::find($id);

        if (!$item) {
            abort(404, 'No such element');
        }

        $item->delete();

        return response()->json(null, 204);
    }
}
