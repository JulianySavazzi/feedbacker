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
    
    public function sumary()
    { //get feedback index 
        
    }
}
