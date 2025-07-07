<?php

namespace App\Http\Controllers;

use App\Models\DetallePedido;
use Illuminate\Http\Request;
use MongoDB\BSON\ObjectId;

class DetallePedidoController extends Controller
{
    public function index()
    {
        $detalles = DetallePedido::all()->map(function ($detalle) {
            $detalle->_id = (string)$detalle->_id;
            $detalle->pedido_id = (string)$detalle->pedido_id;
            $detalle->producto_id = (string)$detalle->producto_id;
            return $detalle;
        });

        return response()->json($detalles);
    }

    public function store(Request $request)
    {
        $request->validate([
            'pedido_id' => 'required|string',
            'producto_id' => 'required|string',
            'cantidad' => 'required|integer|min:1',
            'precio_unitario' => 'required|numeric|min:0',
            'subtotal' => 'required|numeric|min:0'
        ]);

        $detalle = DetallePedido::create([
            'pedido_id' => $request->pedido_id,
            'producto_id' => $request->producto_id,
            'cantidad' => $request->cantidad,
            'precio_unitario' => $request->precio_unitario,
            'subtotal' => $request->subtotal
        ]);

        $detalle->_id = (string)$detalle->_id;

        return response()->json($detalle, 201);
    }

    public function show($id)
    {
        try {
            new ObjectId($id);
        } catch (InvalidArgumentException $e) {
            return response()->json(['error' => 'ID inválido'], 400);
        }

        $detalle = DetallePedido::find($id);
        if (!$detalle) return response()->json(['error' => 'No encontrado'], 404);

        $detalle->_id = (string)$detalle->_id;
        return response()->json($detalle);
    }

    public function update(Request $request, $id)
    {
        try {
            new ObjectId($id);
        } catch (InvalidArgumentException $e) {
            return response()->json(['error' => 'ID inválido'], 400);
        }

        $detalle = DetallePedido::find($id);
        if (!$detalle) return response()->json(['error' => 'No encontrado'], 404);

        $detalle->update($request->only(['pedido_id', 'producto_id', 'cantidad', 'precio_unitario', 'subtotal']));

        $detalle->_id = (string)$detalle->_id;
        return response()->json($detalle);
    }

    public function destroy($id)
    {
        try {
            new ObjectId($id);
        } catch (InvalidArgumentException $e) {
            return response()->json(['error' => 'ID inválido'], 400);
        }

        $detalle = DetallePedido::find($id);
        if (!$detalle) return response()->json(['error' => 'No encontrado'], 404);

        $detalle->delete();
        return response()->json(['message' => 'Detalle eliminado correctamente']);
    }
}