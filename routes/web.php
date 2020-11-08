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
Route::view("/","out.index");
Route::view("/posts","out.posts");
Route::get("/posts/{id}",["\App\Http\Controllers\MashujaaDay","show"]);
Route::view("/post/{id}","out.post");
Route::get("/posts/{q}/{id}/{uuid?}",["\App\Http\Controllers\MashujaaDay","ajax"]);

Route::view("/users","out.users");
Route::get("/users/{user}",["\App\Http\Controllers\UsersController","ajax"]);
Route::view("/add-departments","out.add-departments");
Route::get("/departments/{user}/{q?}",["\App\Http\Controllers\DepartmentsController","ajax"]);
Route::post("/departments/{user}/{q?}",["\App\Http\Controllers\DepartmentsController","create"]);

Route::view("/issues","out.issues");
Route::get("/issues/{query}/{altId?}",[IssuesController::class,"index"]);
Route::view("/login","out.login");
Route::view("/add-post","out.add-post");
// commemnts
Route::post("/comments/{id}",["\App\Http\Controllers\CommentsController","index"]);


Route::get('/about', function () {

   $User=[
       ["name"=>"Vince","locale"=>"Nairobi"],
   ["name"=>"Jules","locale"=>"Nakuru"],
   ["name"=>"Joy","locale"=>"Machakos"]
   ];
     $name="Jules";
      $users = DB::table('comms_departments')->get();
   $props=["User"=>$User,
   "title"=>"my friends.",
   "user"=>$name,
   "city" =>request("city"),
   "users"=>$users];
 
   return view('about',$props);
});
Route::POST("/handlelogin",function(){
   $email=request()->input("email");
  
return response()->json(["user"=>request()->input("email"),"status"=>200]);
});

Route::get("/leah/{id}",["\App\Http\Controllers\MashujaaDay","show"]);

Route::get("/lyft",[LyftController::class,"index"]);
Route::get("/fetch",function(){
    $users = DB::table('comms_departments')->get();
   return view("fetch",["fetch"=>$users]);
});
Route::get("/role",["middleware"=>"Role:editor","uses"=>"App\Http\Controllers\TestController@index" ]);

Route::get("/tailwind/{name?}",[CommsController::class,'index']);
Route::get("/mashujaa",["\App\Http\Controllers\MashujaaDay","index"]);
Route::get("/attic",[MyAttic::class,"index"]);
Route::get("/attic/{name}",[MyAttic::class,"update"]);
    
//[commsController::class,'index']
//"App\Http\Controllers\CommsController@index"
// php artisan app:name SocialNet