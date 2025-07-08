<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use MongoDB\BSON\ObjectId;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        Category::create([
            '_id' => new ObjectId('64bce01a1a2a3a1a1a1a1a11'),
            'nombre' => 'Bebidas',
            'descripcion' => 'Bebidas frías y calientes'
        ]);

        Category::create([
            '_id' => new ObjectId('64bce01a1a2a3a1a1a1a1a12'),
            'nombre' => 'Comidas',
            'descripcion' => 'Platos principales y snacks'
        ]);

        Category::create([
            '_id' => new ObjectId('64bce01a1a2a3a1a1a1a1a13'),
            'nombre' => 'Postres',
            'descripcion' => 'Para endulzar tu día'
        ]);
/*
        Category::create([
            '_id' => new ObjectId('64bce01a1a2a367a1a1a1a13'),
            'nombre' => 'Ensaladas',
            'descripcion' => 'Frescas y saludables'
        ]);

        Category::create([
            '_id' => new ObjectId('4k6ce01a1a2a3a1a1a1a1a13'),
            'nombre' => 'Sopas',
            'descripcion' => 'Calientes y reconfortantes'
        ]);
*/
        
    }
}