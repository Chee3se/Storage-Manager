<?php

namespace App\Http\Controllers;

use App\Models\ActionHistory;
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

        ActionHistory::create([
            'user_id' => auth()->id(),
            'action' => 'create',
            'model' => 'category',
            'new_value' => json_encode($category)
        ]);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|string|unique:categories,name,'. $id
        ]);

        $category = Category::find($id);
        $oldCategory = $category;
        $category->name = $request->name;
        $category->save();

        ActionHistory::create([
            'user_id' => auth()->id(),
            'action' => 'update',
            'model' => 'category',
            'old_value' => json_encode($oldCategory),
            'new_value' => json_encode($category)
        ]);
    }

    public function destroy($id) {
        $category = Category::find($id);
        $oldCategory = $category;
        $category->delete();

        ActionHistory::create([
            'user_id' => auth()->id(),
            'action' => 'delete',
            'model' => 'category',
            'old_value' => json_encode($oldCategory)
        ]);
    }
}
