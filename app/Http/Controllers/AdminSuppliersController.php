<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;

class AdminSuppliersController extends Controller
{
    public function index(Request $request) {
        $search = $request->get('search', '');
        $page = $request->get('page', 1);
        $perPage = $request->get('perPage', 10);
        $sort = $request->get('sort', ['field' => 'id', 'order' => 'asc']);

        $query = Supplier::query();

        if ($search) {
            $query->where('name', 'like', '%' . $search . '%');
        }

        $query->orderBy($sort['field'], $sort['order']);

        return $query->paginate($perPage, ['*'], 'page', $page);
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required|string|unique:suppliers,name',
        ]);

        $supplier = new Supplier();
        $supplier->name = $request->name;
        $supplier->save();
    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|string|unique:suppliers,name,'. $id
        ]);

        $supplier = Supplier::find($id);
        $supplier->name = $request->name;
        $supplier->save();
    }

    public function destroy($id) {
        $supplier = Supplier::find($id);
        $supplier->delete();
    }
}
