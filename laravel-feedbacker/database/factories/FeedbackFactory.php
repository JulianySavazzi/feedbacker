<?php

namespace Database\Factories;

use App\Models\Feedback;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Feedback>
 */
class FeedbackFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        
        return [
            //Feedback model fill
            'text' => Str::random(50),
            'fingerprint' => User::factory(),
            'api_key' => User::factory(),
            'type' => 'ISSUE',
            'device' => 'macbook pro',
            'page' => 'page',
            'created_at' => Carbon::today()
//            Feedback::factory()->create()
        ];
        
    }
}
