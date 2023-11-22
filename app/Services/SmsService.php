<?php

namespace App\Services;

use GuzzleHttp\Client;


class SmsService
{

    public $client;

    public function __construct(
    ) {
        $this->client = new Client(['base_uri' => 'https://textbelt.com']);
    }

    public function sendSms($data)
    {


        try {
            $response = $this->client->request('POST', "/text", [
                'form_params' => [
                    'phone' => $data['phone'],
                    'message' => 'Код подтверждения' . $data['code'],
                    'key' => '3210b6c4eacfa0bcab62ad29b257011e3933b8314TiTl0SbWOQcxv5aaHxDQ615a'
                ]
            ]);

            \Log::info('SMS'. $response->getBody());

            return [
                'success' => $response->getStatusCode() === 200
            ];

        }catch (\Throwable $th) {
            \Log::error($th->getMessage());

            return [
                'success' => false,
                'message' => $th->getMessage(),
            ];
        }

    }

}
