<?php

namespace App\Http\Controllers;

use App\Models\ActionHistory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HistoryController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('History');
    }

    public function all(Request $request)
    {
        $search = $request->get('search', '');
        $page = $request->get('page', 1);
        $perPage = $request->get('perPage', 10);
        $sort = $request->get('sort', ['field' => 'id', 'order' => 'asc']);

        $query = ActionHistory::with('user');

        if ($search) {
            $query->where('action', 'like', '%' . $search . '%')
                ->orWhere('model', 'like', '%' . $search . '%')
                ->orWhere('created_at', 'like', '%' . $search . '%');
        }

        if ($sort['field'] === 'user.name') {
            $query->join('users', 'action_histories.user_id', '=', 'users.id')
                ->select('action_histories.*', 'users.name as user_name')
                ->orderBy('users.name', $sort['order']);
        } else {
            $query->orderBy($sort['field'], $sort['order']);
        }

        return $query->paginate($perPage, ['*'], 'page', $page);
    }
}
