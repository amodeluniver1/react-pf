<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\DetallePedidoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::middleware('api')->group(function () {
    Route::apiResource('categories', CategoryController::class);
});


Route::middleware('api')->group(function () {
    Route::apiResource('products', ProductController::class);
    Route::get('products/category/{categoryId}', [ProductController::class, 'byCategory']);
});

Route::middleware('api')->group(function () {
    Route::apiResource('pedidos', PedidoController::class);
    Route::get('pedidos/cliente/{clienteId}', [PedidoController::class, 'pedidosPorCliente']);
});

Route::middleware('api')->group(function () {
    Route::apiResource('detalle-pedidos', DetallePedidoController::class);
});