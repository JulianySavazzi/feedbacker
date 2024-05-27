<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;
use App\Models\User;
use App\Models\Feedback;

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
        $apiKey = $request->query("api_key");
        $userLoggedApiKey = Feedback::where('api_token', Auth::user());

        if($userLoggedApiKey != null && $userLoggedApiKey === $apiKey){
            return response()->json(true, Response::HTTP_OK);
        } else {
            return response()->json(false, Response::HTTP_NOT_FOUND);
        }

    }
}
