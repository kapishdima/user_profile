<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $hasAdmin = Auth::guard('api')->attempt($request->only('email', 'password'));
        if (!$hasAdmin) {
            abort(401);
        }

        $admin = auth('api')->user();
        $token = $admin->createToken('Main Token')->plainTextToken;

        $response = [
            'admin' => new UserResource($admin),
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
}
