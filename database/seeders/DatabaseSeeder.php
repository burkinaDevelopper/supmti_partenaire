<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB,Str;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        DB::table('n_fraisconvenu')->insert([
            'fcv_montant'=>fake()->numberBetween(1000,50000),
            'fcv_sompayee'=>fake()->numberBetween(1000,12000),
            'fcv_nbperiodes'=>fake()->numberBetween(1000,50000),
            'fcv_mtperiode'=>fake()->randomFloat(),
            'fcv_typefrais_id'=>fake()->numberBetween(1,4),
            'fcv_ins_id'=>fake()->numberBetween(1,5),
            'fcv_typeperiode_id'=>fake()->numberBetween(1,50),
            'fcv_typefrais_ordre'=>fake()->numberBetween(0,30000),
        ]);
    }
}
