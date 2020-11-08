<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LyftController extends Controller
{
    //
    public function  index(){
        $comms=DB::table("comms_posts")->distinct()->get();
        $count=DB::table("comms_posts")->count();
        return view("lyft.liz",[
            "karibu"=>"Welcome Jules",
        "comms"=>$comms,
        "count"=>$count]);
    }
}
