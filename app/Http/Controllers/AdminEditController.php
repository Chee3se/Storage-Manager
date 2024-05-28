<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;

class AdminEditController extends Controller
{
    public function edit() {

        return Redirect::route('admin.users.edit');
    }
}
