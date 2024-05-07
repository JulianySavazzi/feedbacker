<?php

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

/*
* O web.php arquivo contém rotas que são RouteServiceProvider colocadas no webgrupo de middleware,
* que fornece estado de sessão, proteção CSRF e criptografia de cookie.
* Se o seu aplicativo não oferecer uma API RESTful sem estado, todas as suas rotas
* provavelmente serão definidas no web.php arquivo.
*/

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/oi', function(){
    return response()->json('OI! Funcionou.', Response::HTTP_OK);
})->name('oi');

