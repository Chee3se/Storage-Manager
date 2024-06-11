<?php

namespace App\Http\Controllers;

use App\Models\Shelf;
use Illuminate\Http\Request;

class ShelfController extends Controller
{
    public function create()
    {
        // Return a view to create a new shelf
    }

    public function store(Request $request)
    {
        // Validate and create a new shelf
        $validatedData = $request->validate([
            'name' => 'required|unique:shelves',
        ]);

        $shelf = Shelf::create($validatedData);

        return redirect()->route('shelf.index');
    }

    public function edit(Shelf $shelf)
    {
        // Return a view to edit an existing shelf
        return view('shelves.edit', compact('shelf'));
    }

    public function update(Request $request, Shelf $shelf)
    {
        // Validate and update the shelf
        $validatedData = $request->validate([
            'name' => 'required|unique:shelves,name,' . $shelf->id,
        ]);

        $shelf->update($validatedData);

        return redirect()->route('shelf.index');
    }

    public function destroy(Shelf $shelf)
    {
        // Delete the shelf
        $shelf->delete();

        return redirect()->route('shelf.index');
    }
}
