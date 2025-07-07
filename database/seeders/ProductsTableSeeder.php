<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    public function run()
    {
        // Elimina el método create() si existe y usa insertOne o insertMany
        Product::insertOne([
            'nombre' => 'Producto Ejemplo',
            'descripcion' => 'Descripción del producto de ejemplo',
            'stock' => 100,
            'precio' => 19.99,
            'categoria_id' => 1,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        
        // O para múltiples productos:
        Product::insertMany([
            [
                'nombre' => 'Producto 1',
                'descripcion' => 'Descripción 1',
                'stock' => 50,
                'precio' => 29.99,
                'categoria_id' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'nombre' => 'Producto 2',
                'descripcion' => 'Descripción 2',
                'stock' => 75,
                'precio' => 39.99,
                'categoria_id' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}