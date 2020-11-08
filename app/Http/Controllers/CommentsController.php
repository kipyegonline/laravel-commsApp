<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($q)
    {  
        switch ($q) {
          
        case 'addcomment':
                
            $query="INSERT INTO 
               `comms_comments` (altId,post_id,comment,addedBy,addedon,createdon) 
           VALUES(:altId, :postId,:comment,:uuid,:addedon,NOW())";

           $res=DB::insert($query,[
            ":altId"=>request()->altId,
            ":postId"=>request()->post_id,
            ":comment"=>request()->comment,
            ":uuid"=>request()->uuid,
            ":addedon"=>request()->addedon]); 
   
              break;
        case "editComment":
               print_r(request()->all());
               $query="UPDATE comms_comments 
                    set comment=:comment,
                    addedon=:addedon, edited=1
                    where altId=:altId LIMIT 1";
                   $res= DB::update($query,[
                        ":comment"=> request()->edit,
                        "addedon"=>request()->addedEn,
                        ":altId"=>request()->id]);
                      
            break;
        case "deleteComment":
           $id=request()->id;
             $query="DELETE FROM  comms_comments where altId='$id' LIMIT 1";
             echo DB::DELETE($query);
        break;
            default:
                # code...
                break;
        }
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
