<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class LoginController extends Controller
{
    //pegar email e senha da requisicao web - dashboard modal login
    public function authenticate(Request $request)
    {
//        $credentials = $request->validate([
//            'email' => ['required', 'email'],
//                'password' => ['required'],
//            ]);
    
//        if(Auth::attempt($credentials)) {
//            $request->session()->regenerate();
//        }
         
//        return response()->json($credentials);
    }
}
