<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Pedido extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'pedidos';

    protected $fillable = [
        'cliente_id',
        'fecha',
        'estado',
        'total'
    ];

    protected $casts = [
        'cliente_id' => 'string',
        'fecha' => 'datetime',
        'total' => 'decimal:2',
    ];
}
