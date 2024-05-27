<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    //Index
    Route::get('/products', [ProductController::class, 'index'])->name('product.index');

    //Create
    Route::group(['middleware' => ['permission:create products']], function () {
        Route::get('/products/create', [ProductController::class, 'create'])->name('product.create');
        Route::post('/products', [ProductController::class, 'store'])->name('product.store');
    });

    //Read
    Route::get('/products/{id}', [ProductController::class, 'show'])->name('product.show');

    //Update
    Route::group(['middleware' => ['permission:edit products']], function () {
        Route::get('/products/edit/{id}', [ProductController::class, 'edit'])->name('product.edit');
        Route::patch('/products/{id}', [ProductController::class, 'update'])->name('product.update');
    });

    //Delete
    Route::group(['middleware' => ['permission:delete products']], function () {
        Route::delete('/products/{id}', [ProductController::class, 'destroy'])->name('product.destroy');
    });
});
