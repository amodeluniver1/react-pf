<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;
use MongoDB\BSON\Decimal128;

class DetallePedido extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'detalle_pedidos';

    protected $fillable = [
        'pedido_id',
        'producto_id',
        'cantidad',
        'precio_unitario',
        'subtotal'
    ];

    // Casteo manual para campos decimal
    public function getPrecioUnitarioAttribute($value)
    {
        return $value instanceof Decimal128 ? (float)(string)$value : (float)$value;
    }

    public function setPrecioUnitarioAttribute($value)
    {
        $this->attributes['precio_unitario'] = new Decimal128((string) $value);
    }

    public function getSubtotalAttribute($value)
    {
        return $value instanceof Decimal128 ? (float)(string)$value : (float)$value;
    }

    public function setSubtotalAttribute($value)
    {
        $this->attributes['subtotal'] = new Decimal128((string) $value);
    }

    // Relaciones opcionales
    public function pedido()
    {
        return $this->belongsTo(Pedido::class, 'pedido_id', '_id');
    }

    public function producto()
    {
        return $this->belongsTo(Product::class, 'producto_id', '_id');
    }
}