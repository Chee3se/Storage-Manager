<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminEditController;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,

    ]);
})->name('home');

// Route::get('/home', function () {
//     return Inertia::render('Home');
// })->middleware(['auth', 'verified'])->name('home');

Route::get('/storage', function () {
    return Inertia::render('Storage');
})->middleware(['auth', 'verified'])->name('storage');

Route::get('/order', function () {
    return Inertia::render('Order');
})->middleware(['auth', 'verified'])->name('order');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('role:admin')->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
    Route::get('/admin/users', [AdminUserController::class, 'index'])->name('admin.users.index');
    Route::put('/admin/edit/{id}', [AdminUserController::class, 'update'])->name('admin.users.update');
    Route::put('/admin/edit/pass/{id}', [AdminUserController::class, 'updatePass'])->name('admin.users.password');
    Route::delete('/admin/delete/{id}', [AdminUserController::class, 'destroy'])->name('admin.users.destroy');
    Route::post('/admin/users' , [AdminUserController::class, 'store'])->name('admin.users.store');
});

require __DIR__.'/auth.php';

require __DIR__.'/products.php';
