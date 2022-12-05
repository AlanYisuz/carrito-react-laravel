<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\SaleController;
use App\Http\Controllers\Api\KartController;
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

Route::controller(ProductController::class)->group(function () {
    Route::get('/products','index');
    Route::post('/product','store');
    Route::put('/product/{id}','update');
    Route::get('/product/{id}','show');
    Route::delete('/product/{id}','destroy');
});

Route::controller(SaleController::class)->group(function () {
    Route::get('/sales','index');
    Route::post('/sale','store');
    Route::put('/sale/{id}','update');
    Route::get('/sale/{id}','show');
    Route::delete('/sale/{id}','destroy');
});

Route::controller(KartController::class)->group(function () {
    Route::get('/karts','index');
    Route::post('/kart','store');
    Route::put('/kart/{id}','update');
    Route::get('/kart/{id}','show');
    Route::delete('/kart/{id}','destroy');
});