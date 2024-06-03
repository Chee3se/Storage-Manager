<?php

use App\Http\Controllers\ShelfController;
use Illuminate\Support\Facades\Route;

Route::get('/shelves/create', [ShelfController::class, 'create'])->name('shelf.create');
Route::post('/shelves', [ShelfController::class, 'store'])->name('shelf.store');
Route::get('/shelves/{shelf}/edit', [ShelfController::class, 'edit'])->name('shelf.edit');
Route::patch('/shelves/{shelf}', [ShelfController::class, 'update'])->name('shelf.update');
Route::delete('/shelves/{shelf}', [ShelfController::class, 'destroy'])->name('shelf.destroy');
