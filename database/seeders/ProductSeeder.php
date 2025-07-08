<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Category;
use MongoDB\BSON\ObjectId;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $platos = Category::where('nombre', 'Platos principales')->first();
        $bebidas = Category::where('nombre', 'Bebidas veganas')->first();
        $postres = Category::where('nombre', 'Postres veganos')->first();

        Product::create([
            'nombre' => 'Tacos de tofu',
            'descripcion' => 'Tacos rellenos de tofu marinado y vegetales',
            'stock' => 40,
            'precio' => 15.90,
            'imagen' => 'https://www.pcrm.org/sites/default/files/tacos-de-tofu-8.jpg',
            'categoria_id' => new ObjectId('64bce01a1a2a3a1a1a1a1a11'),
        ]);

        Product::create([
            'nombre' => 'Ensalada de quinoa',
            'descripcion' => 'Quinoa con vegetales frescos y vinagreta de limón',
            'stock' => 30,
            'precio' => 12.50,
            'categoria_id' => new ObjectId('64bce01a1a2a3a1a1a1a1a11'),
        ]);

        Product::create([
            'nombre' => 'Jugo de mango y chía',
            'descripcion' => 'Refrescante bebida natural con chía',
            'stock' => 25,
            'precio' => 7.00,
            'categoria_id' => new ObjectId('64bce01a1a2a3a1a1a1a1a12'),
        ]);

        Product::create([
            'nombre' => 'Brownie vegano',
            'descripcion' => 'Brownie hecho con cacao, plátano y harina integral',
            'stock' => 20,
            'precio' => 10.00,
            'categoria_id' => new ObjectId('64bce01a1a2a3a1a1a1a1a13'),
        ]);
    }
}