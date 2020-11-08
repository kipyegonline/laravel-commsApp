<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About what</title>
</head>
<body>
<p>About something  {{$title}} in my city {{$city}} </p>
<button  id="btn">{{$user}}</button>
<ul style="list-style:none; padding:2rem;">
@foreach($User as $use)
   <li style="padding:.25rem;border-bottom:1px solid red;"> {{$loop->index +1}}. 
   <a href="./vincente/<?= $use['name'] ?>">{{$use["name"]}}  - {{$use["locale"]}} </a></li>
@endforeach
@for($i=0; $i< count($User); $i++)
  @if($User[$i]["name"]!= "Vince")
     <p> {{$User[$i]["name"]}} </p>
  @endif
@endfor
</ul>
<?php
 $count=0;
foreach ($users as $user) {
 $count++;
  echo $count  . ". ".$user->department . "<br/>";
  # code...
}
?>
    <script>
    const btn=document.getElementById("btn")
    const handleButton=()=>alert("click")
    btn.onclick=handleButton;
   
    </script>
</body>
</html>