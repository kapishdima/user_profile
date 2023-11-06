<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaTable extends Migration
{
    public function up()
    {
        Schema::create('media', function (Blueprint $table) {
            $table->id('id');
            $table->text('name')->nullable();
            $table->text('compressed_path')->nullable();
            $table->text('path');
            $table->softDeletes();
            $table->timestamps();
        });
    }
}
