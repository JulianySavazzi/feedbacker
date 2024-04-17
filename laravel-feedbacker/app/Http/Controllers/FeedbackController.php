<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class FeedbackController extends Controller
{
    /**
     * 
     * feedbacks table -> columns
     * text √
     * fingerprint -> user id (foreign) √
     * id: uuidv4() √
     * api_key -> user apiKey √
     * type: String(type).toUpperCase() √
     * device √
     * page √
     * created_at: new Date().getTime() √
     *
     */
    public function all(Request $request)
    { //get all feedbacks for logged user or get feedbacks by type

        $filter = Feedback::all()->where('fingerprint', Auth::id());
        $type = strtoupper(filter_var($request->query("type"), FILTER_DEFAULT));
        if(!$type || $type == 'ALL' || $type == 'TODOS'){
            $feedbacks = $filter;
        } else {
            $feedbacks = $filter->where('type', $type);
        }

        return response()->json($feedbacks, Response::HTTP_OK);
    }
    
    /**
     * retornar os feedbacks em json de acordo com o filtro:
     * {
     * "all": 0,
     * "issue": 0,
     * "idea": 0,
     * "other": 0
     * }
     */
    public function summary()
    { //get feedback index 

        $userLogged = Auth::id();

        $feedbacks = [
            "all" => Feedback::all()->where('fingerprint', $userLogged)->count(),
            "issue" => Feedback::where('fingerprint', $userLogged)->where('type', 'ISSUE')->count(),
            "idea" => Feedback::where('fingerprint', $userLogged)->where('type', 'IDEA')->count(),
            "other" => Feedback::where('fingerprint', $userLogged)->where('type', 'OTHER')->count()
        ];

        return response()->json($feedbacks, Response::HTTP_OK);
    }
}
