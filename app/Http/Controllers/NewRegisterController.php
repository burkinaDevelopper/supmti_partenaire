<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NewRegisterController extends Controller
{
    public function inscription()
    {
        $data = [
            "logo" => asset("assets/image/supmti-logo.png"),
        ];
        return Inertia::render('manager/NewInsciption', $data);
    }
}
