<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model; 

class Product extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'products';

    protected $fillable = [
        'nombre',
        'descripcion',
        'stock',
        'precio',
        'categoria_id'
    ];

    protected $casts = [
        'precio' => 'decimal:2',
        'stock' => 'integer',
    ];

    // Relación con categoría (si tienes modelo Category)
    public function categoria()
    {
        return $this->belongsTo(Category::class, 'categoria_id', '_id');
    }
}
