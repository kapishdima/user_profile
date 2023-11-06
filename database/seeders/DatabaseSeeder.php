<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            LocalesTableSeeder::class,
            MediaTableSeeder::class,
            UsersTableSeeder::class,
            SeoDataTableSeeder::class,
            ProjectsTableSeeder::class,
            SettingsTableSeeder::class,
            ApplicationsTableSeeder::class,
            AchievementTableSeeder::class,
        ]);
    }
}
