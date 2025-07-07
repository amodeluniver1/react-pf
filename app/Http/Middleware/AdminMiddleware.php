<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (!Auth::check() || !Auth::user()->esAdmin()) {
            return response()->json(['error' => 'No autorizado'], 403);
        }

        return $next($request);
    }
}