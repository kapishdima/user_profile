<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MediaResource extends JsonResource
{
    public function toArray($request)
    {


        return [
            'id' => $this->id,
            'path' => $this->path,
            'video' => $this->video,
            'compressed_path' => $this->compressed_path,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
