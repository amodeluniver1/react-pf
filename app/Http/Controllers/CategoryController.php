<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use MongoDB\BSON\ObjectId;
use MongoDB\Driver\Exception\InvalidArgumentException;

class CategoryController extends Controller
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
        $categories = Category::all();
        return response()->json($categories);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:100',
            'descripcion' => 'required|string'
        ]);

        $category = Category::create($request->all());
        return response()->json($category, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $objectId = new ObjectId($id);
        } catch (InvalidArgumentException $e) {
            return response()->json(['error' => 'ID inválido'], 400);
        }

        $category = Category::find($id);
        if (!$category) {
            return response()->json(['error' => 'No encontrado'], 404);
        }

        return response()->json($category);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $objectId = new ObjectId($id);
        } catch (InvalidArgumentException $e) {
            return response()->json(['error' => 'ID inválido'], 400);
        }

        $category = Category::find($id);
        if (!$category) {
            return response()->json(['error' => 'No encontrado'], 404);
        }

        $request->validate([
            'nombre' => 'sometimes|string|max:100',
            'descripcion' => 'sometimes|string'
        ]);

        $category->update($request->all());
        return response()->json($category);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $objectId = new ObjectId($id);
        } catch (InvalidArgumentException $e) {
            return response()->json(['error' => 'ID inválido'], 400);
        }

        $category = Category::find($id);
        if (!$category) {
            return response()->json(['error' => 'No encontrado'], 404);
        }

        $category->delete();
        return response()->json(['message' => 'Categoría eliminada correctamente']);
    }
}
