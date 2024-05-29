<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class AdminCategoriesController extends Controller
{
    public function index(Request $request) {
        $search = $request->get('search', '');
        $page = $request->get('page', 1);
        $perPage = $request->get('perPage', 10);
        $sort = $request->get('sort', ['field' => 'id', 'order' => 'asc']);

        $query = Category::query();

        if ($search) {
            $query->where('name', 'like', '%' . $search . '%');
        }

        $query->orderBy($sort['field'], $sort['order']);

        return $query->paginate($perPage, ['*'], 'page', $page);
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required|string|unique:categories,name'
        ]);

        $category = new Category();
        $category->name = $request->name;
        $category->save();
    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|string|unique:categories,name,'. $id
        ]);

        $category = Category::find($id);
        $category->name = $request->name;
        $category->save();
    }

    public function destroy($id) {
        $category = Category::find($id);
        $category->delete();
    }
}
