<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\AppBaseController;
use App\Http\Requests\API\UpdateSettingsAPIRequest;
use App\Http\Resources\SettingResource;
use App\Models\Setting;
use App\Services\API\TranslationsService;
use Illuminate\Support\Facades\DB;

class SettingsAPIController extends AppBaseController
{
    public function __construct(
        protected TranslationsService $translationsService,
    ) {
    }

    public function show($id = null): SettingResource
    {
        return new SettingResource(Setting::with(['translations'])->first());
    }

    public function update(UpdateSettingsAPIRequest $request, int $id)
    {
        $setting = Setting::first();

        if (!$setting) {
            abort(404, 'No such element');
        }
        DB::beginTransaction();
        try {
            $data = $request->validated();

            $setting->update([
                'html_before_body' => $data['html_before_body'] ?? '',
                'html_after_body' => $data['html_after_body'] ?? '',
                'html_after_footer' => $data['html_after_footer'] ?? '',
                'phone' => $data['phone'] ?? '',
                'email' => $data['email'] ?? '',
                'instagram' => $data['instagram'] ?? '',
                'dribbble' => $data['dribbble'] ?? '',
                'behance' => $data['behance'] ?? '',
                'lat' => $data['lat'] ?? '',
                'lng' => $data['lng'] ?? '',
                'projects' => $data['projects'] ?? '',
            ]);

            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }

        return new SettingResource(Setting::first());
    }
}
