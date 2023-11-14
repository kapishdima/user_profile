<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\MediaController;

use Illuminate\Support\Facades\Route;
use App\Http\Resources\UserResource;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/register', [AuthController::class, 'register'])->name('register');
Route::post('/register/verify-email-code', [AuthController::class, 'verifyEmailCode'])->name('auth.verify-email-code');
Route::post('/register/resend-email-code', [AuthController::class, 'resendEmailCode'])->name('auth.resend-email-code');
Route::post('/register/verify-phone-code', [AuthController::class, 'verifyPhoneCode'])->name('auth.verify-email-code');
Route::post('/register/send-phone-code', [AuthController::class, 'sendPhoneCode'])->name('auth.resend-email-code');
Route::post('/register/resend-phone-code', [AuthController::class, 'sendPhoneCode'])->name('auth.resend-email-code');
Route::post('/register/verify-reset-code', [AuthController::class, 'verifyResetCode'])->name('auth.resend-email-code');

Route::post('/user/reset-password', [UserController::class, 'resetPassword'])->name('auth.resend-email-code');

Route::get('/migrate', function(){
    \Artisan::call('migrate');
});

Route::get('/storage', function(){
    \Artisan::call('storage:link');
});

Route::group([
    'middleware' => 'auth:sanctum',
], function ($router) {
    Route::resource('media', 'MediaController')->except(['update']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::put('/user/personal', [UserController::class, 'updatePersonalInfo']);
    Route::put('/user/phone', [UserController::class, 'updatePhone']);
    Route::put('/user/email', [UserController::class, 'updateEmail']);
    Route::delete('/user', [UserController::class, 'remove']);
    Route::post('/user/documents', [UserController::class, 'storeUserDocuments']);
    Route::post('/user/avatar', [UserController::class, 'storeUserAvatar']);
});

Route::middleware('auth:sanctum')->get('/user', function () {
    return new UserResource(auth()->user());
});
