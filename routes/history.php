<?php

use App\Http\Controllers\HistoryController;
use Illuminate\Support\Facades\Route;

Route::get('/history', [HistoryController::class, 'index'])->name('history.index');
Route::get('/history/all', [HistoryController::class, 'all'])->name('history.all');
