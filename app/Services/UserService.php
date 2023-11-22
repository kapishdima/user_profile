<?php

namespace App\Services;

use App\Models\OneTimeEmailCode;
use App\Models\OneTimePhoneCode;
use App\Models\User;
use App\Notifications\SendEmailVerificationCode;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;


class UserService extends EntityService
{
    public $model = User::class;

    public function __construct(
        protected UploadService $uploadService,
        protected MediaService $mediaService,
        protected SmsService $smsService
    ) {
    }

    public function create($data)
    {

        $user = $this->model::create($data);

        return $user;
    }

    public function update($data, $id)
    {
        $user = $this->model::find($id);

        if (!$user) {
            return false;
        }

        if (isset($data['password']) && $data['password'] != null) {
            $data['password'] = bcrypt($data['password']);
        } else {
            unset($data['password']);
        }

        if(isset($data['avatar']) && $data["avatar"] !== null) {
            $avatar = $this->mediaService->store(['file' => $data["avatar"]]);
            $user->avatar_id = $avatar->id;
            $user->save();
        }


        $user->update($data);

        return $user;
    }

    public function updateDocuments ($documents, $id) {
        $user = $this->model::find($id);

        if (!$user) {
            return false;
        }

        if (isset($documents) && count($documents) > 0) {
            foreach ($documents as $document) {
                $uploadedDocument = $this->uploadService->uploadImage($document);
                $user->userDocuments()->create(["path" => $uploadedDocument["compressed_path"]]);
            }
        }

        return $user;
    }

    public function remove ($id) {
        return User::find($id)->delete();
    }

    public function register($data)
    {
        DB::beginTransaction();
        try {
            $data['password'] = bcrypt($data['password']);
            $user = User::create($data);

            $oneTimeCode = OneTimeEmailCode::create([
                'email' => $user->email,
                'code' => rand(1000, 9999),
                'expires_at' => now()->addMinutes(60),
            ]);

            Notification::route('mail', $user->email)
                ->notify(new SendEmailVerificationCode($oneTimeCode));

            DB::commit();

            return $user;
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }

    }

    public function resendEmailCode($data)
    {

        $oneTimeCode = OneTimeEmailCode::create([
            'email' => $data["email"],
            'code' => rand(1000, 9999),
            'expires_at' => now()->addMinutes(60),
        ]);

        Notification::route('mail', $data["email"])
            ->notify(new SendEmailVerificationCode($oneTimeCode));

        return true;
    }

    public function verifyEmailCode($data)
    {
        $oneTimeCode = OneTimeEmailCode::where('code', $data['code'])
            ->where('expires_at', '>', now())
            ->orderBy('created_at', 'desc')
            ->first();

        if (!$oneTimeCode) {
            return false;
        }

        $user = User::where('email', $oneTimeCode->email)->first();

        if (!$user) {
            return false;
        }

        $user->update([
            'email_verified_at' => now(),
        ]);

        $oneTimeCode->delete();

        return true;
    }

    public function sendPhoneCode($data)
    {
        $phone = $data['phone'];

        if (!$phone) {
            return false;
        }

        $oneTimeCode = OneTimePhoneCode::create([
            'phone' => $phone,
            'code' => rand(1000, 9999),
            'expires_at' => now()->addMinutes(60),
        ]);

        $success = $this->smsService->sendSms(["phone" => $phone, "code" => $oneTimeCode->code]);

        // Notification::route('vonage', $phone)
        //     ->notify(new SendPhoneVerificationCode($oneTimeCode));

        return $success;
    }

    public function vefiryPhoneCode($data)
    {
        $oneTimeCode = OneTimePhoneCode::where('code', $data['code'])
            ->where('expires_at', '>', now())
            ->orderBy('created_at', 'desc')
            ->first();

        if (!$oneTimeCode) {
            return false;
        }

        $oneTimeCode->delete();

        return true;
    }

    public function resetPassword($data) {
        $email = $data['email'];
        $password = $data['password'];

        $user = $this->model::where("email", $email)->first();

        if(!$user) {
            return false;
        }

        $this->update(["password" => $password], $user->id);
        return true;
    }
}
