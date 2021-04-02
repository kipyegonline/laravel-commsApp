<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IssuesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($q,$id)
    {
      switch ($q){
        case 'fetchall':
          
          $issues=DB::table("comms_issues")->get();
          return \response()->json($issues);
              break;
        case 'delete':
          $q="DELETE FROM comms_issues WHERE altId='$id' LIMIT 1";
          $issues=DB::DELETE($q);
          return \response()->json($issues);
              break;
         case "fetchSelectedIssue":
             $sql="SELECT a.*, b.altName as dept FROM comms_issues a
             join comms_departments b on  a.userdept =b.id
             WHERE a.userdept=$id ORDER BY a.issueCount";
             $issues=DB::select($sql);
             return response()->json($issues);
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
      
        $sql="INSERT INTO comms_issues (issue,altId, userdept) VALUES(:issue,:altId, :userdept)";
        echo DB::insert($sql,[":issue"=>$request->issue,":altId"=>$request->altId, ":userdept"=>$request->userdept]);
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
