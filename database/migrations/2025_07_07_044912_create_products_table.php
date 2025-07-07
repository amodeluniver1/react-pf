<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('products', function (Blueprint $collection) {
            $collection->string('nombre', 100);
            $collection->text('descripcion');
            $collection->integer('stock');
            $collection->decimal('precio', 10, 2);
            $collection->bigInteger('categoria_id');
            $collection->timestamps();
            
            // Índices
            $collection->index('categoria_id');
        });
    }

    public function down()
    {
        Schema::dropIfExists('products');
    }
};
