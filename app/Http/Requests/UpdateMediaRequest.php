<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class UpdateMediaRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'alt' => ['nullable', 'array'],
            'title' => ['nullable', 'array'],
            'video' => ['nullable'],
            'small' => ['required'], // string|file
            'medium' => ['required'], // string|file
            'large' => ['required'], // string|file
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->errors(), 422));
    }
}
