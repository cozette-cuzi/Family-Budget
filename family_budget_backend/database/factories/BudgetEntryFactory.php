<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BudgetEntry>
 */
class BudgetEntryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => rtrim($this->faker->sentence(rand(1, 3), true), '.'),
            'amount' => rand(100, 2000),
            'category' => $this->faker->randomElement(['INCOME', 'OUTCOME'])
        ];
    }
}
