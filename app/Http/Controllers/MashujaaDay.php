<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use Illuminate\Support\Facades\DB;

class MashujaaDay extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $users = DB::table('users')->get();
        //$user = DB::table('users')->where('name', 'John')->first();
        //$email = DB::table('users')->where('name', 'John')->value('email');
        //$user = DB::table('users')->find(3); retrieve by id
       // $users = DB::table('users')->select('name', 'email as user_email')->get();
       //Create a response instance
       $minutes = 1;
$response = new Response('Hello World');
$response->withCookie(cookie('jules', 'jules', $minutes));


       //echo $request->cookie('jules');

       $users = DB::table('comms_departments')->get();
   return view("fetch",["fetch"=>$users,'cookie'=>$response]);
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
       $q=self::fetchQuery("where b.user_id=:id ORDER BY a.status, a.id desc ");
        $user=DB::select($q,["id"=> $id]);
       
    return response()->json($user);
        //echo json_encode($user);
        

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

public function ajax($q,$id,$uuid){

    switch ($q) {
        case 'search':
                    $query=self::fetchQuery("where 
            a.clientName LIKE '%$id%' OR
            a.clientEmail  LIKE '%$id%' OR  
            a.clientPhone LIKE '%$id%' OR
            a.clientOrg LIKE '%$id%' OR
            a.subject LIKE  '%$id%' OR
            c.username LIKE  '%$id%'  OR 
             MONTHNAME(b.addedon) LIKE  '%$id%'
            ORDER BY a.status, a.id desc");

            $user=DB::select($query,["qa"=> $id]);
            return response()->json($user);
            break;
        case 'btngroup':
                $ext=self::fetchbyStatus($id,$uuid);
                $query=self::fetchQuery($ext);
                $user=DB::select($query);
                return response()->json($user);
        case "fetchdeptIssues":
                $query=self::fetchQuery("where b.user_id={$uuid} and b.issueId='{$id}' ORDER BY a.id desc");
                $user=DB::select($query);
                return response()->json($user);   
        case "fetchdeptusers":
                $query=self::fetchQuery("where b.user_id={$id}  ORDER BY a.id desc");
                $user=DB::select($query);
                return response()->json($user); 
        case "setticks":
                $query="UPDATE comms_posts_users set seen=1 where post_id=$id AND  user_id=$uuid LIMIT 1";
                $user=DB::update($query);
                return response()->json($user); 
        case "issues":
                $query="select id,issue, altId from comms_issues where userdept=$id";
                $issues=DB::select($query);
                return response()->json($issues); 
        case "deptusers":
                $query="select id,username from comms_users where userdept=$id";
                $issues=DB::select($query);
                return response()->json($issues); 
        case "fetchdates":
            $ext="WHERE b.user_id={$uuid} AND 
              CAST(b.addedon AS DATE)='{$id}'";
            $query=self::fetchQuery($ext);
               
                $user=DB::select($query);
                
                return response()->json($user); 
        case "fetchcomments":
             $id= DB::table('comms_posts')->where('altId', $id)->value('id');
             
                        $sql=" SELECT 
            a.altId as altId,
            a.post_id as post_id,
            a.comment as comment,
            a.addedBy as handler_id,
            a.addedBy as adder,
            a.addedon as addedEn,
            a.createdon as createdon,
            b.username as addedBy 
            FROM comms_comments a INNER JOIN comms_users b 
            ON a.addedBy=b.id
            WHERE a.post_id='{$id}' ORDER BY a.comment_id desc";
               
                $user=DB::select($sql);
                
                return response()->json($user);
        case "fetchrecentposts":
            
       $id= DB::table('comms_posts')->where('altId', $id)->value('id');
        
            $query=" where  b.user_id={$uuid} AND (a.status=0 OR a.status=1) AND a.id !={$id} ORDER BY a.id desc LIMIT 5" ;
        $sql=self::fetchQuery($query);
               
                $user=DB::select($sql);
               
                return response()->json($user); 
        case "fetchRelatedIssues":
        
                $query="select a.issue as issue ,count(b.post_id) as issuecount, a.id as issueId  from
            comms_issues a inner join comms_posts_users b on a.id=b.issueId where b.user_id=$id  GROUP BY a.id
            order by issuecount";
                    
               
                $user=DB::select($query);
              
                return response()->json($user); 
        case "fetchpostsrecents":

              $sql=self::fetchQuery("where b.user_id={$uuid} and b.issueId='{$id}' ORDER BY a.id desc");
             $user=DB::select($sql);              
            return response()->json($user); 

        case "resolveissue":
           
            $status= request()->query("status");
            $id= DB::table('comms_posts')->where('altId', $id)->value('id');
            
             $query="UPDATE comms_posts SET status=$status,resolvedby=$uuid where id=$id LIMIT 1";
            $rows= DB::update($query);
            echo \json_encode(["status"=>$rows>0 ? 2 :1]);
        default:
            # code...
            break;
    }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //DB::statement('drop table users');
    }

    private static function fetchbyStatus($id,$uuid){
  //concat query to static fetch query method
  $id=$id>0 ? $id :0;
  
  $query= "where b.user_id={$uuid} and a.status='{$id}' ORDER BY a.id desc"  ;  
 return $query;
}
private static function fetchQuery($ext){
  return "select 
a.id as id, 
a.altId as altId,
a.clientName as clientName,
a.clientEmail as clientEmail, 
a.clientPhone,
a.clientOrg as clientOrg, 
a.message as message,
 a.subject as subject, 
 a.createdon,
 a.addedBy as adder,
 a.resolvedby as resolver,
(SELECT username from comms_users where id=a.resolvedby) as resolvedBy,
 (SELECT username from comms_users where id=a.addedBy) as addedBy,
 a.addedon as addedon,
 a.status as status,
 b.user_id as handler_id,
 b.seen as seen,
 (select issue from comms_issues where id=b.issueId) as issue,
 c.username as handler
 from comms_posts a
 inner join comms_posts_users b on a.id =b.post_id 
 inner join comms_users c on b.user_id = c.id  " . $ext;
}
    
}
//select clientName,message, (select username from comms_users where id=user_id) handler from comms_posts join comms_posts_users on id=user_id LIMIT 10
