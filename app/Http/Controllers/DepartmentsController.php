<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class DepartmentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($req)
    {
        //
         
       switch ($req) {
          
        case 'adddept':
              $sql="INSERT INTO comms_departments (department,altName,alt_id) 
        VALUES( :department,:altName, :altId)";

        echo DB::insert($sql,[
            ":department"=>request()->department,
            ":altName"=>request()->altName, 
            ":altId"=> request()->altId]);
               break;
        case 'editdept':
           
           $sql="UPDATE comms_departments 
            SET 
            department=:dept,
            altName=:altName 
            WHERE id=:id 
            LIMIT 1"; 
           $id= DB::update($sql,[":dept"=>
            request()->department,":altName"=>
            request()->altName, ":id"=>
            request()->id]);
            $res=[];
             $id >0 ? $res=["status"=>200,"msg"=>"Added successfully"] : 
            $res= ["status"=>201,"msg"=>"Error updating department"];
            echo \json_encode($res);
           break;
           default:
               # code...
               break;
       }
        
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
     public function ajax($user,$id){

        switch ($user) {
            case 'fetchdepts':
              $users=DB::table("comms_departments")->get();
       return \response()->json($users);
             case 'deletedept':
              echo  DB::delete("DELETE FROM comms_departments where id={$id} LIMIT 1");
             break;
            default:
                # code...
                break;
        }
       
    }
}
