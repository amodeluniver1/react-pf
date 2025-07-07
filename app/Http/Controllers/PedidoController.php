<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use Illuminate\Http\Request;
use MongoDB\BSON\ObjectId;
use MongoDB\BSON\Decimal128;

class PedidoController extends Controller
{
    public function index()
    {
        $pedidos = Pedido::all()->map(function ($pedido) {
            $pedido->_id = (string) $pedido->_id;
            $pedido->cliente_id = (string) $pedido->cliente_id;
            return $pedido;
        });

        return response()->json($pedidos);
    }

    public function store(Request $request)
    {
        $request->validate([
            'cliente_id' => 'required|string',
            'total' => 'required|numeric',
            'fecha' => 'nullable|date',
            'estado' => 'nullable|string'
        ]);

        $pedido = Pedido::create([
            'cliente_id' => $request->cliente_id,
            'fecha' => $request->fecha ?? now(),
            'estado' => $request->estado ?? 'pendiente',
            'total' => $request->total
        ]);

        $pedido->_id = (string) $pedido->_id;
        $pedido->cliente_id = (string) $pedido->cliente_id;

        return response()->json($pedido, 201);
    }

    public function show($id)
    {
        try {
            new ObjectId($id);
        } catch (InvalidArgumentException $e) {
            return response()->json(['error' => 'ID del usuario inválido'], 400);
        }

        $pedido = Pedido::find($id);
        if (!$pedido) return response()->json(['error' => 'No encontrado'], 404);

        $pedido->_id = (string) $pedido->_id;
        $pedido->cliente_id = (string) $pedido->cliente_id;

        return response()->json($pedido);
    }

    public function update(Request $request, $id)
    {
        try {
            new ObjectId($id);
        } catch (InvalidArgumentException $e) {
            return response()->json(['error' => 'ID inválido'], 400);
        }

        $pedido = Pedido::find($id);
        if (!$pedido) return response()->json(['error' => 'No encontrado'], 404);

        $pedido->update($request->only(['cliente_id', 'fecha', 'estado', 'total']));

        $pedido->_id = (string) $pedido->_id;
        $pedido->cliente_id = (string) $pedido->cliente_id;

        return response()->json($pedido);
    }

    public function destroy($id)
    {
        try {
            new ObjectId($id);
        } catch (InvalidArgumentException $e) {
            return response()->json(['error' => 'ID inválido'], 400);
        }

        $pedido = Pedido::find($id);
        if (!$pedido) return response()->json(['error' => 'No encontrado'], 404);

        $pedido->delete();
        return response()->json(['message' => 'Pedido eliminado correctamente']);
    }

    public function pedidosPorCliente($clienteId)
    {
        try {
            new ObjectId($clienteId);
        } catch (InvalidArgumentException $e) {
            return response()->json(['error' => 'ID del usuario inválido'], 400);
        }


        $pedidos = Pedido::where('cliente_id', $clienteId)->get()->map(function ($pedido) {
            $pedido->_id = (string) $pedido->_id;
            $pedido->cliente_id = (string) $pedido->cliente_id;
            return $pedido;
        });

        return response()->json($pedidos);
    }
}
