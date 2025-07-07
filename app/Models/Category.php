<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model; 

class Category extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'categories';

    protected $fillable = [
        'nombre',
        'descripcion'
    ];

    // Relación con productos (si es necesaria)
    public function productos()
    {
        return $this->hasMany(Product::class, 'categoria_id');
    }
}