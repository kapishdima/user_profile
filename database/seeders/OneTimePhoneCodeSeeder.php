<?php

namespace Database\Seeders;

use App\Models\OneTimePhoneCode;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OneTimePhoneCodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        OneTimePhoneCode::factory()->count(10)->create();
    }
}
