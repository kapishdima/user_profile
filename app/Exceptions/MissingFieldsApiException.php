<?php

namespace App\Exceptions;

use Exception;

class MissingFieldsApiException extends Exception
{
    public function render()
    {
        return response()->json([
            'message' => 'No data provided, field[s]: \"'.$this->getMessage().'\" - are required',
        ], 422);
    }
}
