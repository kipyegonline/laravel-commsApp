<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Vinceware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        //echo "Middle ". $request;
        return $next($request);
    }
}
