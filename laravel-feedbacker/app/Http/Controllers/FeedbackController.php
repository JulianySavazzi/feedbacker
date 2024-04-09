<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;

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
        
    }
}
