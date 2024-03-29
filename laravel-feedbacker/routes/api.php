<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/*
* O api.php arquivo contém rotas que são RouteServiceProvider colocadas no api grupo de middleware.
* Essas rotas devem ser sem estado, portanto, as solicitações que entram no aplicativo por meio dessas rotas
* devem ser autenticadas por meio de tokens e não terão acesso ao estado da sessão.
*/

//retornar usuario logado
Route::middleware('auth:sanctum')->get('/user', function (Request $request){
    return $request->user();
});