<?php

namespace Database\Factories;

use App\Models\User;
use Database\Factories\Traits\AddTranslation;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    use AddTranslation;

    protected $model = User::class;

    public function definition()
    {
        return [
            'username' => $this->faker->name(),
            'email' => $this->faker->unique()->email(),
            'email_verified_at' => now(),
            'password' => bcrypt('password'),
            'remember_token' => Str::random(10),
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function ($model) {
            $this->addTranslation($model);
        });
    }
}
