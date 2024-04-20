<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MoviesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('movies')->insert([
            'name' => 'Movie.php Name',
            'poster' => 'https://i.ebayimg.com/images/g/YJQAAOSwUjxjyvgk/s-l1200.webp',
            'genre' => 'Genre',
            'rating' => 4.5,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
