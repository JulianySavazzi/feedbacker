<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Pagination\CursorPaginator;

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

    /**
    * get all feedbacks for logged user
    * or get feedbacks by type
    **/
    public function all(Request $request)
    {
        //get url params by query string
        $type = strtoupper(filter_var($request->query("type"), FILTER_SANITIZE_ENCODED));
        $limit = (int)filter_var($request->query("limit"), FILTER_SANITIZE_NUMBER_INT);
        $offset = (int)filter_var($request->query("offset"), FILTER_SANITIZE_NUMBER_INT);
        //select by user logged
        $filter = Feedback::where('fingerprint', Auth::id())->orderByDesc('created_at');

        if(!$type || $type === 'ALL' || $type === 'TODOS' || $type === ''){
            $feedbacks = $filter->limit($limit)->offset($offset)->get();
            //feedbacks count total
            $total = Feedback::all()->where('fingerprint', Auth::id())->count();
        } else {
            $feedbacks = $filter->where('type', $type)->limit($limit)->offset($offset)->get();
            //feedbacks count total by type
            $total = $filter->where('type', $type)->count();
        }

        $response = [
            "results" => $feedbacks,
            "pagination" => [
                "offset" => $offset,
                "limit" => $limit,
                "total" => $total,
            ]
        ];

        return response()->json($response, Response::HTTP_OK);
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
    { /** get feedback index **/
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
