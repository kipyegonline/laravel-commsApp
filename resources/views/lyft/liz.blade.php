<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lyft</title>
    <style>
        body{
            width:90%;
            margin:auto;
            padding:1rem;
            background:#ccc;
        }
        ul{
            list-style-type: none;
        font-weight:normal;
        font-family:helvetica;
        padding:.5rem;
        margin:0.5rem;
        max-width:350px;
        font-size:1.3rem;

        }
        li{
             padding:0.5rem ;
        margin:0 auto;
        border-bottom: 1px solid #333;
        border-width: 50%;
        }
        li:hover{
            background:#ccc;
        }
    </style>
</head>
<body>
    <h1>{{$karibu}}
        <div>
            <ul>
            @foreach ($comms as $item)
              <li> {{$loop->index +1}}. {{$item->clientName}} - <b>{{$item->clientEmail}} </b> </li>
            
            
            @endforeach
            <ul>
                <p>{{$count}} </p>
        </div>
       
</body>
</html>