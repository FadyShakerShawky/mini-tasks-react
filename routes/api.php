<?php

use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('tasks')->group(function () {
    Route::get('index', [TaskController::class, 'index']);
    Route::put('updateStatus', [TaskController::class, 'updateStatus']);
    Route::put('updateTitle', [TaskController::class, 'updateTitle']);
    Route::delete('delete/{task}', [TaskController::class, 'destroy']);
    Route::post('store', [TaskController::class, 'store']);
    Route::get('show/{task}', [TaskController::class, 'show']);
});
