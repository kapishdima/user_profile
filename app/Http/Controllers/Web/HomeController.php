<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Locale;
use App\Services\API\TranslationsService;

class HomeController extends Controller
{
    public function __construct(
        private TranslationsService $translationServise,
    ) {
    }

    public function index()
    {
        $locale = Locale::where('locale', \App::getLocale())->first();

        return view('pages.home', [
        ]);
    }
}
