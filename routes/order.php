<?php

use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;

Route::get('/orders/create', [OrderController::class, 'create'])->name('order.create');
Route::post('/orders', [OrderController::class, 'store'])->name('order.store');
Route::get('/orders/{order}/edit', [OrderController::class, 'edit'])->name('order.edit');
Route::patch('/orders/{order}', [OrderController::class, 'update'])->name('order.update');
Route::delete('/orders/{order}', [OrderController::class, 'destroy'])->name('order.destroy');
