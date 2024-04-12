<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;
use Symfony\Component\HttpFoundation\Response;

class FeedbackController extends Controller
{
    /**
     * 
     * feedbacks table -> columns
     * text √
     * fingerprint √
     * id: uuidv4() √
     * api_key -> user apiKey (foreign) √
     * type: String(type).toUpperCase() √
     * device √
     * page √
     * created_at: new Date().getTime() √
     *
     */
    
    public function all()
    { //get all feedbacks
        $feedbacks = Feedback::all();
        
        return response()->json([
            'feedbacks' => $feedbacks
        ], Response::HTTP_OK);
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

    public function sumary()
    { //get feedback index 

//        $userLogged = Auth::user();
         $userLogged = 1;

//        $type = $feedbacks->type;
        
//        $feedbacks = Feedback::all();

//        $feedbacks = Feedback::where(
//            function ($query) use ($userLogged, $type){
//                $query->where([
//                    'api_key' => $userLogged,
//                    'type' => $type
//                    ]);
//            })->orderBy('type', 'ASC')->get();

        $feedbacks = [
            "all" => Feedbacks::all()->count(),
            "issue" => Feedbacks::where('fingerprint', $userLogged)->where('type', 'ISSUE')->count(),
            "idea" => 2,
            "other" => 2
        ];

        return response()->json([
            'feedbacks' => $feedbacks
         ], Response::HTTP_OK);

//        return response()->json([
//            Feedback::where('api_key', $userLogged)->get()
//        ], Response::HTTP_OK);
    }
}
