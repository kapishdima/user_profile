<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\LocaleResource;
use App\Models\Locale;

class LocaleAPIController extends Controller
{
    public function index()
    {
        return LocaleResource::collection(Locale::all());
    }
}
