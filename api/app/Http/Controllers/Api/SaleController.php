<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sale;

class SaleController extends Controller
{
    public function index()
    {
        //
        $sales = Sale::all();
        return $sales;
    }


    public function store(Request $request)
    {
        //
        $sale = new Sale();
        $sale->id = $request->id;
        $sale->nombre = $request->nombre;
        $sale->precio = $request->precio;
        $sale->categoria = $request->categoria;
        $sale->imagen = $request->imagen;

        $sale->save();
    }

    public function show($id)
    {
        //
        $sale = Sale::find($id);
        return $sale;
    }

    public function update(Request $request, $id)
    {
        //
        $sale = Sale::findOrFail($request->id);
        $sale->id = $request->id;
        $sale->nombre = $request->nombre;
        $sale->precio = $request->precio;
        $sale->categoria = $request->categoria;
        $sale->imagen = $request->imagen;

        $sale->save();
        return $sale;
    }

    public function destroy($id)
    {
        //
        $sale = Sale::destroy($id);
        return $sale;
    }
}
