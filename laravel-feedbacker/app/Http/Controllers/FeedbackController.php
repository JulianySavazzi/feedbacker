<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        
    }
    
    public function sumary()
    { //get feedback index 
        
    }
}
