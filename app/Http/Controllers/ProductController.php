<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use MongoDB\BSON\ObjectId;
use MongoDB\Driver\Exception\InvalidArgumentException;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{

    public function __construct()
    {
        $this->middleware('api');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with('categoria')->get();
        return response()->json($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:100',
            'descripcion' => 'required|string',
            'stock' => 'required|integer|min:0',
            'precio' => 'required|numeric|min:0',
            'categoria_id' => 'required|exists:categories,_id'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $product = Product::create([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'stock' => (int)$request->stock,
            'precio' => (float)$request->precio,
            'categoria_id' => $request->categoria_id
        ]);
        
        $product->load('categoria');

        return response()->json($product, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            new ObjectId($id); // Validar formato de ID
        } catch (InvalidArgumentException $e) {
            return response()->json(['error' => 'ID de producto inválido'], 400);
        }

        $product = Product::with('categoria')->find($id);

        if (!$product) {
            return response()->json(['error' => 'Producto no encontrado'], 404);
        }

        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            new ObjectId($id);
        } catch (InvalidArgumentException $e) {
            return response()->json(['error' => 'ID de producto inválido'], 400);
        }

        $product = Product::find($id);
        if (!$product) {
            return response()->json(['error' => 'Producto no encontrado'], 404);
        }

        $validator = Validator::make($request->all(), [
            'nombre' => 'sometimes|string|max:100',
            'descripcion' => 'sometimes|string',
            'stock' => 'sometimes|integer|min:0',
            'precio' => 'sometimes|numeric|min:0',
            'categoria_id' => 'sometimes|exists:categories,_id'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $updateData = [];
        if ($request->has('nombre')) $updateData['nombre'] = $request->nombre;
        if ($request->has('descripcion')) $updateData['descripcion'] = $request->descripcion;
        if ($request->has('stock')) $updateData['stock'] = (int)$request->stock;
        if ($request->has('precio')) $updateData['precio'] = (float)$request->precio;
        if ($request->has('categoria_id')) $updateData['categoria_id'] = $request->categoria_id;

        $product->update($updateData);

        return response()->json($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            new ObjectId($id);
        } catch (InvalidArgumentException $e) {
            return response()->json(['error' => 'ID de producto inválido'], 400);
        }

        $product = Product::find($id);
        if (!$product) {
            return response()->json(['error' => 'Producto no encontrado'], 404);
        }

        $product->delete();
        return response()->json(['message' => 'Producto eliminado correctamente']);
    }

    public function byCategory(string $categoryId)
    {
        try {
            new ObjectId($categoryId);
        } catch (InvalidArgumentException $e) {
            return response()->json(['error' => 'ID de categoría inválido'], 400);
        }

        $products = Product::with('categoria')
            ->where('categoria_id', $categoryId)
            ->get();

        return response()->json($products);
    }
}
