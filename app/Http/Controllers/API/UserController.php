<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ResetPasswordRequest;
use App\Http\Requests\StoreUserAvatarRequest;
use App\Http\Requests\StoreUserDocumentsRequest;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\UpdateEmailRequest;
use App\Http\Requests\UpdatePersonalInfoRequest;
use App\Http\Requests\UpdatePhoneRequest;
use App\Services\UserService;

class UserController extends Controller
{
    public function __construct(protected UserService $userService)
    {

    }

    public function updatePersonalInfo(UpdatePersonalInfoRequest $request) {

        try {
            $updatedUser = $this->userService->update(
                $request->validated(),
                Auth::user()->id
            );

            return response()->json([
                'success' => true,
                'user' => $updatedUser,
            ], 201);

        } catch (\Throwable $th) {
            \Log::error($th->getMessage());

            return response()->json([
                'success' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function updatePhone(UpdatePhoneRequest $request) {

        try {
            $updatedUser = $this->userService->update(
                $request->validated(),
                Auth::user()->id
            );

            return response()->json([
                'success' => true,
                'user' => $updatedUser,
            ], 201);

        } catch (\Throwable $th) {
            \Log::error($th->getMessage());

            return response()->json([
                'success' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function updateEmail(UpdateEmailRequest $request) {

        try {
            $updatedUser = $this->userService->update(
                $request->validated(),
                Auth::user()->id
            );

            return response()->json([
                'success' => true,
                'user' => $updatedUser,
            ], 201);

        } catch (\Throwable $th) {
            \Log::error($th->getMessage());

            return response()->json([
                'success' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function remove() {
        try {
            $this->userService->remove(Auth::user()->id);

            return response()->json([
                'success' => true,
                'message' => 'User successfully delete'
            ], 201);

        } catch (\Throwable $th) {
            \Log::error($th->getMessage());

            return response()->json([
                'success' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function storeUserDocuments(StoreUserDocumentsRequest $request) {
        try {
            $updatedUser = $this->userService->updateDocuments(
                $request->file("documents"),
                Auth::user()->id
            );

            return response()->json([
                'success' => true,
                'user' => new UserResource($updatedUser),
            ], 201);

        } catch (\Throwable $th) {
            \Log::error($th->getMessage());

            return response()->json([
                'success' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function storeUserAvatar(StoreUserAvatarRequest $request) {
        try {
            $updatedUser = $this->userService->update(
                ["avatar" => $request->file("avatar")],
                Auth::user()->id
            );

            return response()->json([
                'success' => true,
                'user' => new UserResource($updatedUser),
            ], 201);

        } catch (\Throwable $th) {
            \Log::error($th->getMessage());

            return response()->json([
                'success' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function resetPassword (ResetPasswordRequest $request) {
        try {
            $this->userService->resetPassword(
                $request->validated()
            );

            return response()->json([
                'success' => true,
            ], 201);

        } catch (\Throwable $th) {
            \Log::error($th->getMessage());

            return response()->json([
                'success' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }
}
