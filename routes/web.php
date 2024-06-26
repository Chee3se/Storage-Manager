<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    require __DIR__.'/admin.php';
});

Route::middleware('role:admin|worker')->group(function () {
    require __DIR__.'/history.php';
});

Route::middleware('role:admin|worker')->group(function () {
    require __DIR__.'/order.php';
});

Route::middleware('role:admin|worker|sorter')->group(function () {
    require __DIR__.'/shelves.php';
});

require __DIR__.'/auth.php';

require __DIR__.'/products.php';
