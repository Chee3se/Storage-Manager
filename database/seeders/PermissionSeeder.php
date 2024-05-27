<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = Role::findByName('admin');
        $worker = Role::findByName('worker');
        $sorter = Role::findByName('sorter');

        $workerPermissions = [
            Permission::create(['name' => 'create products']),
            Permission::create(['name' => 'edit products']),
            Permission::create(['name' => 'delete products']),
            Permission::create(['name' => 'create orders']),
            Permission::create(['name' => 'edit orders']),
            Permission::create(['name' => 'delete orders'])
        ];

        $adminPermissions = [
            Permission::create(['name' => 'create users']),
            Permission::create(['name' => 'edit users']),
            Permission::create(['name' => 'delete users'])
        ];

        $admin->syncPermissions(array_merge($adminPermissions, $workerPermissions));

        $worker->syncPermissions($workerPermissions);
    }
}
