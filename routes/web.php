<?php

use App\Http\Controllers\AdminCategoriesController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminSuppliersController;
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
    // Index
    Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');

    // Users
    Route::get('/admin/users', [AdminUserController::class, 'index'])->name('admin.users.index');
    Route::post('/admin/users' , [AdminUserController::class, 'store'])->name('admin.users.store');
    Route::put('/admin/users/edit/{id}', [AdminUserController::class, 'update'])->name('admin.users.update');
    Route::put('/admin/users/edit/pass/{id}', [AdminUserController::class, 'updatePass'])->name('admin.users.password');
    Route::delete('/admin/users/delete/{id}', [AdminUserController::class, 'destroy'])->name('admin.users.destroy');

    // Categories
    Route::get('/admin/categories', [AdminCategoriesController::class, 'index'])->name('admin.categories.index');
    Route::post('/admin/categories' , [AdminCategoriesController::class, 'store'])->name('admin.categories.store');
    Route::put('/admin/categories/edit/{id}', [AdminCategoriesController::class, 'update'])->name('admin.categories.update');
    Route::delete('/admin/categories/delete/{id}', [AdminCategoriesController::class, 'destroy'])->name('admin.categories.destroy');

    //Suppliers
    Route::get('/admin/suppliers', [AdminSuppliersController::class, 'index'])->name('admin.suppliers.index');
    Route::post('/admin/suppliers' , [AdminSuppliersController::class, 'store'])->name('admin.suppliers.store');
    Route::put('/admin/suppliers/edit/{id}', [AdminSuppliersController::class, 'update'])->name('admin.suppliers.update');
    Route::delete('/admin/suppliers/delete/{id}', [AdminSuppliersController::class, 'destroy'])->name('admin.suppliers.destroy');

});

require __DIR__.'/auth.php';

require __DIR__.'/products.php';
