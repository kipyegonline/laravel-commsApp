<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class UsersController extends Controller
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
    public function ajax($user){

        switch ($user) {
            case 'fetchusers':
             $users=DB::table("comms_users")->get();
            return \response()->json($users);
                break;
            case 'fetchuserdeptstats':
                $query="SELECT b.department as dept, b.id as id,
                    count(a.userdept)  as members 
                    FROM  comms_users a inner join comms_departments b 
                    on a.userdept=b.id  GROUP BY dept, id ORDER BY members";

                     $users=DB::select($query);
            return \response()->json($users);
                 break;
             case 'getdeptsearch':
                $q=request()->query("q");
                $sql="SELECT 
                a.id, a.username, 
                a.usertitle, a.useremail, 
                b.department as dept,
                a.userdept, a.userphone,
                a.userAltId, b.department
                FROM comms_users a 
                INNER JOIN comms_departments b on a.userdept= b.id 
                where 
                a.userdept LIKE '%$q%' 
                OR a.username LIKE '%$q%'  
                OR a.useremail LIKE '%$q%' 
                OR a.userphone LIKE '%$q%' 
                ORDER BY username";

                     $users=DB::select($sql);
            return \response()->json($users);
                 break;
            default:
                # code...
                break;
        }
       
    }
}
