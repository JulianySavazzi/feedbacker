<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;
use App\Models\User;

class UserKeyController extends Controller
{

    public function generate()
    { //get user api key and generate user api key

        $userLogged = Auth::user();
        $apiKey = Str::random(60);

        return response()->json([
            User::where('id', $userLogged->getAuthIdentifier())
            ->update(['api_token'=> $apiKey]),
            'user' => $userLogged
                ], Response::HTTP_OK);
    }


    public function checkApiKey(Request $request)
    {
        $apiKey = filter_var($request->query("api_key"), FILTER_SANITIZE_ENCODED);
        $userApiKey = User::all()->where('api_token', $apiKey)->count();

        if($userApiKey){
            return response()->json(null, Response::HTTP_OK);
        } else {
            return response()->json(null, Response::HTTP_NOT_FOUND);
        }

    }
}
