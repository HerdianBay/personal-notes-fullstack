<?php

use App\Http\Controllers\NoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/notes', [NoteController::class, 'index']);
Route::post('/notes', [NoteController::class, 'store']);

Route::get('/notes/archived', [NoteController::class, 'archived']);

Route::patch('/notes/{id}/archive', [NoteController::class, 'archive']);
Route::patch('/notes/{id}/unarchive', [NoteController::class, 'unarchive']);

Route::get('/notes/{id}', [NoteController::class, 'show']);
Route::delete('/notes/{id}', [NoteController::class, 'destroy']);
