<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Kart;

class KartController extends Controller
{
    public function index()
    {
        //
        $karts = Kart::all();
        return $karts;
    }


    public function store(Request $request)
    {
        //
        $kart = new Kart();
        $kart->id = $request->id;
        $kart->nombre = $request->nombre;
        $kart->precio = $request->precio;
        $kart->categoria = $request->categoria;
        $kart->imagen = $request->imagen;

        $kart->save();
    }

    public function show($id)
    {
        //
        $kart = Kart::find($id);
        return $kart;
    }

    public function update(Request $request, $id)
    {
        //
        $kart = Kart::findOrFail($request->id);
        $kart->id = $request->id;
        $kart->nombre = $request->nombre;
        $kart->precio = $request->precio;
        $kart->categoria = $request->categoria;
        $kart->imagen = $request->imagen;

        $kart->save();
        return $kart;
    }

    public function destroy($id)
    {
        //
        $kart = Kart::destroy($id);
        return $kart;
    }
}
