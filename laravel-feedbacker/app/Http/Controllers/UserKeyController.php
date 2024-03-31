<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;
use App\Models\User;

class UserKeyController extends Controller
{
    //get user api  key and get generate user api key
    public function generate()
    {
        $userLogged = Auth::user();
        $apiKey = Str::random(60);

        return response()->json([
            User::where('id', $userLogged->getAuthIdentifier())
            ->update(['api_token'=> $apiKey]),
            'user' => $userLogged
                ], Response::HTTP_OK);
    }
}
