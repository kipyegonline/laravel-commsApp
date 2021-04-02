<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\CommsController;
use App\Http\Controllers\LyftController;
use App\Http\Controllers\IssuesController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\MyAttic;
use App\Http\MiddleWare\Novemberware;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// posts
Route::view("/","out.index");
Route::view("/posts","out.posts");
Route::get("/posts/{id}",["\App\Http\Controllers\MashujaaDay","show"]);
Route::view("/post/{id}","out.post.[id]");
Route::get("/posts/{q}/{id}/{uuid?}",["\App\Http\Controllers\MashujaaDay","ajax"]);
Route::post("/posts/addposts", ["\App\Http\Controllers\MashujaaDay","store"]);
//users
Route::view("/users","out.users");
Route::view("/user","out.user");
Route::get("/users/{user}",["\App\Http\Controllers\UsersController","ajax"]);
Route::post("/users/{user}",["\App\Http\Controllers\UsersController","store"]);
//departments
Route::view("/add-departments","out.add-departments");
Route::view("/department","out.department");
Route::get("/departments/{user}/{q?}",["\App\Http\Controllers\DepartmentsController","ajax"]);
Route::post("/departments/{user}/{q?}",["\App\Http\Controllers\DepartmentsController","create"]);
//issues
Route::view("/issues","out.issues");
Route::get("/issues/{query}/{altId?}",[IssuesController::class,"index"]);
Route::post("/issues/{query}/{altId?}",[IssuesController::class,"store"]);
Route::view("/login","out.login");
Route::view("/add-post","out.add-post");
// comments
Route::post("/comments/{id}",["\App\Http\Controllers\CommentsController","index"]);

//login

Route::POST("/handlelogin",["\App\Http\Controllers\UsersController","handleLogin"]);
Route::POST("/reset-password",["\App\Http\Controllers\UsersController","resetPassword"]);
Route::get("/reset-link/{link}",["\App\Http\Controllers\UsersController","resetPasswordLink"]);
Route::POST("/update-password",["\App\Http\Controllers\UsersController","updatePassword"]);

//[commsController::class,'index']
//"App\Http\Controllers\CommsController@index"
// php artisan app:name SocialNet
