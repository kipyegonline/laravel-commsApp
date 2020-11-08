<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TailVince</title>
</head>
<body>
    <ul>
    <?php foreach($users as $user){
        echo  "<li> $user->clientName - $user->clientEmail   </li>";
    } ?>
    </ul>
    <h1>{{$message}} </h1>
    <a href="/">Go</a>
  
</body>
</html>