<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Products/Index', [
            'products' => Product::with('thumbnail')->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Products/create', [
            'create'
        ]); 
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        return Inertia::render('Products/Show', [
            'product' => Product::with('thumbnail')->find($id)
        ]);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
