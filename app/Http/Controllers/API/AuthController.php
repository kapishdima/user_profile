<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ResendPasswordRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\ResendEmailCodeRequest;
use App\Http\Requests\SendPhoneCodeRequest;
use App\Http\Requests\VerifyCodeRequest;
use App\Http\Requests\VerifyPhoneCodeRequest;
use App\Services\UserService;


class AuthController extends Controller
{
    public function __construct(protected UserService $userService)
    {

    }

    public function login(Request $request)
    {
        $hasAdmin = Auth::guard('api')->attempt($request->only('email', 'password'));
        if (!$hasAdmin) {
            abort(401);
        }

        $admin = auth('api')->user();
        $token = $admin->createToken('Main Token')->plainTextToken;

        $response = [
            'user' => new UserResource($admin),
            'token' => $token,
        ];

        return response($response, 201);
    }

    public function logout(Request $request)
    {
        if (auth('api')->user()) {
            auth('api')->user()->tokens()->delete();
        }

        return [
            'message' => 'Logged out',
        ];
    }

    public function register(RegisterRequest $request)
    {

        try {
            $this->userService->register(
                $request->validated(),
            );

            return response()->json([
                'success' => true,
                'message' => 'Registered successfully',
            ], 201);

        } catch (\Throwable $th) {
            \Log::error($th->getMessage());

            return response()->json([
                'success' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function resendEmailCode(ResendEmailCodeRequest $request)
    {
        $sended = $this->userService->resendEmailCode($request->validated());

        if(!$sended) {
            return response()->json([
                'success' => false,
                'message' => 'Code not sent successfully',
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Code sent successfully',
        ]);
    }

    public function verifyEmailCode(VerifyCodeRequest $request)
    {
        $data = $request->validated();
        $isValid = $this->userService->verifyEmailCode($data);

        $user = User::where('email', $data['email'])->first();
        $this->userService->update(["phone" => $data["phone"]], $user->id);

        if (!$isValid) {

            return response()->json([
                'success' => false,
                'message' => 'Code is invalid',
            ], 401);
        }

        return response()->json([
            'success' => true,
            'message' => 'Code is valid',
        ]);
    }

    public function verifyResetCode(VerifyCodeRequest $request)
    {
        $data = $request->validated();
        $isValid = $this->userService->verifyEmailCode($data);

        if (!$isValid) {

            return response()->json([
                'success' => false,
                'message' => 'Code is invalid',
            ], 401);
        }

        return response()->json([
            'success' => true,
            'message' => 'Code is valid',
        ]);
    }


    public function sendPhoneCode(SendPhoneCodeRequest $request)
    {
        $this->userService->sendPhoneCode($request->validated());

        return response()->json([
            'success' => true,
            'message' => 'Phone Code sent successfully',
        ]);
    }

    public function verifyPhoneCode(VerifyPhoneCodeRequest $request)
    {
        $isValid = $this->userService->vefiryPhoneCode($request->validated());

        if (!$isValid) {
            return response()->json([
                'success' => false,
                'message' => 'Phone Code is invalid',
            ], 401);
        }

        return response()->json([
            'success' => true,
            'message' => 'Phone Code is valid',
        ]);
    }
}
