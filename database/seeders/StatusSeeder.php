<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         //php artisan db:seed --class=StatusSeeder
        DB::table('status')->insert(['title' => "added"]);
        DB::table('status')->insert(['title' => "ready"]);
        DB::table('status')->insert(['title' => "postponed"]);
    }
}
