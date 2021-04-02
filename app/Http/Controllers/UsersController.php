<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use \Illuminate\Http\Response;

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
    public function store(Request $request,$q)
    {
        //
       
       
        switch ($q) {

            case "edituser":
    $username= $request->username;
    $userphone= $request->userphone;
    $usertitle= $request->usertitle;
    $useremail= $request->useremail;
    $userdept= $request->userdept;
    $userpassword= $request->userpassword;
    $userAltId= $request->userAltId;
     $id=$request->id;
    
              return $this->editUsers($username, $userphone, $usertitle, $useremail, $userdept, $id);
          


            break;
            case 'adduser':
    $username= $request->username;
    $userphone= $request->userphone;
    $usertitle= $request->usertitle;
    $useremail= $request->useremail;
    $userdept= $request->userdept;
    $userpassword= $request->userpassword;
    $userAltId= $request->userAltId;

    //validate 
    if(!empty($username) && !empty($userphone)
     && !empty($usertitle) && !empty($useremail)
      && !empty($userpassword)){

          //check if email exists
          $checker=DB::table('comms_users')->where('useremail', $useremail)->value('useremail');
          if($checker){
        
            echo json_encode(["status"=>201,"msg"=>"{$useremail} already exists on the system"]);
          }else{
         return  $this->insertUsers($username,$userphone,$usertitle,$useremail, $userdept, $userpassword,$userAltId);
          }       


      }else{
         //if some values are missing
            echo json_encode(["status"=>201,"msg"=>"Some fields are missing. Check and try again"]);
      }
                
                break;
            
            default:
                # code...
                break;
        }
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
             $users=DB::table("comms_users as a")
             ->join("comms_departments as b","a.userdept","=","b.id")
             ->select("a.id","a.username","a.useremail","a.usertitle","a.userphone","a.userAltId","b.department as dept","b.id as userdept")
             ->orderBy("a.username","asc")
             ->get();
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
            case "fetchSelectedUser":
                $q=request()->query("q");
                echo $q;
            case "deleteuser":
                $q=request()->query("q");
                $res=DB::delete("delete from comms_users where id=$q");
                echo $res;
            default:
                # code...
                break;
        }
       
    }
private function hashPassword($password){
    return password_hash($password,PASSWORD_DEFAULT, ["cost"=>15]);
}
private function insertUsers($username,$userphone,$usertitle,$useremail, $userdept, $userpassword,$userAltId){
    $feed=[];
    //hash password
   $userpassword= $this->hashPassword($userpassword);   
    //insert to table
  $sql="INSERT INTO comms_users 
(username,userphone, usertitle,useremail, userdept, userpassword, userAltId, addedon)
VALUES(:username,:userphone ,:usertitle, :useremail, :userdept, :userpassword, :userAltId, NOW())";
                $id=DB::insert( $sql,[
    ":username"=>$username, 
   ":userphone"=>$userphone,
   ":usertitle"=>$usertitle, 
   ":useremail"=>$useremail, 
   ":userdept"=>$userdept, 
   ":userpassword"=>$userpassword, 
   ":userAltId"=>$userAltId  
                ]);
 $id>0 ? $feed=["status"=>200,"msg"=>"User added successfully"] : $feed=["status"=>201,"msg"=>"Unexpected error adding user.refresh and try again"];
              return response()->json($feed);
}
 
private function editUsers($username, $userphone, $usertitle, $useremail, $userdept, $id){
   $feed=[];
   $sql="UPDATE `comms_users`
    set username=:username,
    userphone=:userphone,
    usertitle=:usertitle,
    useremail=:useremail,
    userdept=:userdept,

    addedon=NOW()
    WHERE id={$id} LIMIT 1";

      $id=DB::update( $sql,[
    ":username"=>$username, 
   ":userphone"=>$userphone,
   ":usertitle"=>$usertitle, 
   ":useremail"=>$useremail, 
   ":userdept"=>$userdept,  
   
                ]);
                
 $id>0 ? $feed=["status"=>200,"msg"=>"User updated successfully"] : $feed=["status"=>201,"msg"=>"Unexpected error updating user.refresh and try again"];
            
 return response()->json($feed);
 }
 public function handleLogin(Request $request){
     //check if user email exists
     $email=filter_var($request->email, FILTER_VALIDATE_EMAIL);

   $this->validate($request,["email"=>"required","password"=>"required|min:6"]);
  
     $user_exists=DB::table("comms_users")->where("useremail",$email)->get();
   
     if(!count($user_exists)) return response()->json(["status"=>201,"msg"=>"Invalid login details"]);
//dd(auth()->user());
     if(count($user_exists)){
         // check password
         $password=DB::table("comms_users")->where("useremail",$email)->value("userpassword");
        $user=password_verify($request->password,$password);
       
       if($user) return $this->processUser($email);
       
      return response()->json(["status"=>201,"msg"=>"Incorrect email/password combination"]);
     
     }else{
         return response()->json(["status"=>201,"msg"=>"Incorrect email/password combination"]);
     }
     

 }
 private function processUser($email){
     
    $altId=DB::table("comms_users")->where("useremail",$email)->get("userAltId");
    
      $user = DB::select("select a.username as username, a.useremail as useremail, a.userdept as userdept,a.usertitle as usertitle, a.id as uuid,b.department as dept, b.altName as deptAlt from comms_users a inner join comms_departments b on a.userdept=b.id where a.useremail=:email LIMIT 1",[":email"=>$email]);
      //echo json_encode($user);
     
      if(count($user)){
 $user = $user[0];
     $id=$user->uuid;
     $user->uuid=$altId[0]->userAltId."-".$id;
     $user->status=200;
     
      $notifiq=DB::table("comms_posts as p")
      
      ->select(DB::raw("count(p.status) status"))
     
      ->join("comms_posts_users as pu","p.id","=","pu.post_id")   
        
        ->where("pu.user_id",$id)
        ->where("p.status","<",1)
        ->get();
        
     $user->notifications=$notifiq[0]->status;
     return response()->json($user);
      }else{
         $user= DB::table("comms_users")->where("useremail",$email)->get();
         echo \json_encode($user);
      }
     
      
 }
 public function resetPassword(Request $request){
     
      $email=filter_var($request->email, FILTER_VALIDATE_EMAIL);
      $this->validate($request,["email"=>"required|string"]);
      
     // check if email exists
     $user_exists=DB::table("comms_users")->where("useremail",$request->email)->get();
     if(count($user_exists)){
 //get the verification code
    $vcode= DB::table("comms_users")->where("useremail",$email)->value("userAltId");
    // we should send this link to their email addresss,though.
     return response()->json(["status"=>200,"msg"=>$vcode]);
     }else{
         return response()->json(["status"=>201,"msg"=>"Email address,$email, doesn't exist here."]);
     }
     }
    

 
  public function resetPasswordLink(Request $request,$link){
 //verify link is valid
 $isValid=DB::table("comms_users")->where("userAltId",$link)->get();
 

 
     
     return view("out.reset-link.[link]");

 }
 public function updatePassword(Request $request){
     $msg="";
     $feed=[];
     $password=trim($request->password);
     $this->validate($request,["password"=>"min:6"]);
     $altId=$request->altId;
     $uuid=$request->uuid;
     //get new password,old password, new altID, user id,
     $oldpassword=DB::table("comms_users")->where("userAltId",$altId)->value("userpassword");
    $oldAltId=DB::table("comms_users")->where("userAltId",$altId)->value("userAltId");

     
        if(!$oldAltId){
return response()->json(["status"=>201,"msg"=>"This reset link is expired, kindly reset password again"]); 
        } else if(password_verify($password ,$oldpassword)){
      return response()->json(["status"=>201,"msg"=>"New password cannot be same as old password"]);  
     
    }else if(strlen($password)>5){
          $password=$this->hashPassword($password);
         $res= DB::update("update comms_users set userpassword=:password,userAltId=:altId where userAltId=:id  LIMIT 1",
         [":password"=>$password,":altId"=>$uuid,":id"=>$altId]);
        
         $res>0 ? $feed=["status"=>200,"msg"=>"Password updated successfully"] :
         $feed=["status"=>200,"msg"=>"The password is up to date"] ;
        return response()->json($feed);
     }else{
         $msg="Password is too short";
        return response()->json(["status"=>201,"msg"=>$msg]);  
     }

 }
}
