<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function edit(Order $order)
    {
        // Return a view to edit an existing order
        return Inertia::render('Order/Edit', [
            'order' => $order,
        ]);
    }

    public function update(Request $request, Order $order)
    {
        // Validate and update the order status
        $validatedData = $request->validate([
            'status' => 'required|in:pending,processing,completed,cancelled',
        ]);

        $order->update($validatedData);

        return redirect()->route('order.index');
    }

    public function destroy(Order $order)
    {
        // Delete the order
        $order->delete();

        return redirect()->route('order.index');
    }

    public function create()
    {
        // Return a view to create a new order
        return Inertia::render('Order/Create');
    }

    public function store(Request $request)
    {
        // Validate and store a new order
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        Order::create($validatedData);

        return redirect()->route('order.index');
    }
}
