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
* Criar controller -> php artisan make:controller NameController
*/

Route::group(['middleware' => ['auth:sanctum']], function(){
    //retornar usuario logado
    Route::get('/user', function (Request $request){
        return $request->user();
    });

    Route::post('/user/generate', [\App\Http\Controllers\UserKeyController::class, 'generate'])->name('user.generate');

    Route::get('/feedbacks', [\App\Http\Controllers\FeedbackController::class, 'all'])->name('feedbacks.all');

    Route::get('/feedbacks/summary', [\App\Http\Controllers\FeedbackController::class, 'summary'])->name('feedbacks.summary');
});
