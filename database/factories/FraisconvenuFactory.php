<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class FraisconvenuFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // return [
        //     // 'fcv_montant'=>
        //     // 'fcv_sompayee'=>
        //     // 'fcv_nbperiodes'=>
        //     // 'fcv_typefrais_id'=>
        //     // 'fcv_ins_id'=>
        //     // 'fcv_typeperiode_id'=>
        //     // 'fcv_typefrais_ordre'=>
        // ];
        // DB::table('n_fraisconvenu')->insert([
        //     'fcv_montant'=>fake()->numberBetween(1000,50000),
        //     'fcv_sompayee'=>fake()->numberBetween(1000,12000),
        //     'fcv_nbperiodes'=>fake()->numberBetween(1000,50000),
        //     'fcv_mtperiode'=>fake()->randomFloat(),
        //     'fcv_typefrais_id'=>fake()->numberBetween(1,4),
        //     'fcv_ins_id'=>fake()->numberBetween(1,5),
        //     'fcv_typeperiode_id'=>fake()->numberBetween(1,50),
        //     'fcv_typefrais_ordre'=>fake()->numberBetween(0,30000),
        // ]);
    }
}
