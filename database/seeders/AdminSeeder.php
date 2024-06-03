<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@example.com',
            'password' => bcrypt('root'),
        ]);
        $admin->assignRole('admin');
        $worker = User::factory()->create([
            'name' => 'worker',
            'email' => 'worker@example.com',
            'password' => bcrypt('root'),
        ]);
        $worker->assignRole('worker');
        $sorter = User::factory()->create([
            'name' => 'sorter',
            'email' => 'sorter@example.com',
            'password' => bcrypt('root'),
        ]);
        $sorter->assignRole('sorter');
    }
}
