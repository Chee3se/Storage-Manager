<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Image;

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
        return Inertia::render('Products/create', []); 
        return Inertia::render('Products/create', [
            'create'
        ]);
    }

public function store(Request $request)
{
    $request->validate([
        'name' => 'required|string|max:255',
        'description' => 'required|string',
        'price' => 'required|numeric|min:0',
        'image' => 'required|image|mimes:jpeg,png|max:2048',
    ]);

    $product = new Product();
    $product->name = $request->input('name');
    $product->description = $request->input('description');
    $product->price = $request->input('price');
    $image = new Image();
    
    $product->supplier_id = 1;
    $product->save();
    

    if ($request->hasFile('image')) {
        $imagePath = $request->file('image')->store('products', 'public'); 
        $image->url ='storage/' . $imagePath;
        $image->is_thumbnail = true;
        $image->product_id = $product->id;
            
        }

    $image->save();

    return redirect()->route('product.index')->with('success', 'Product created successfully!');
}
    public function store(Request $request, $productId, $shelfId)
    {
        $product = Product::find($productId);
        $shelf = Shelf::find($shelfId);

        if (!$product || !$shelf) {
            return response()->json(['error' => 'Invalid product or shelf'], 400);
        }

        $productShelf = new ProductShelf();
        $productShelf->product_id = $productId;
        $productShelf->shelf_id = $shelfId;
        $productShelf->save();

        return response()->json(['message' => 'Product added to shelf successfully'], 201);
    }

    public function show($id)
    {
        return Inertia::render('Products/Show', [
            'product' => Product::with('thumbnail')->find($id)
        ]);
    }

    public function edit($id)
    {

    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        if ($request->has('shelf')) {
            $product->shelf = $request->input('shelf');
            $product->save();
        }
        return response()->json(['shelf' => $request->input('shelf')], 200);
    }

    public function destroy($id)
    {
        //
    }
}
