<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Project Leah</title>
</head>
<body>
    <section>
        <ul style="list-style: none; padding:1rem .5rem;">
       @foreach($user as $item)
       <li style="padding:.5rem; margin:0;">{{$loop->index + 1}}. {{$item->username}} </li>
       @endforeach
        </ul>
        <p><a href="/fetch">Back </a></p>
    </section>
    
  
</body>
</html>