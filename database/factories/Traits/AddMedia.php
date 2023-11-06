<?php

namespace Database\Factories\Traits;

use App\Models\Media;

trait AddMedia
{
    public function addMedia($model, $count = 6)
    {
        $media = Media::factory()->count($count)->create();

        foreach ($media as $image) {
            $model->media()->attach($image->id, ['order' => rand(1, 5)]);
        }
    }
}
