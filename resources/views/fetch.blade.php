



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Fetch data</title>
    <style>
        table{
            padding:10px;
            
            
            border-collapse: collapse;
            margin:1rem;
            display:none;
            width: 100%;
            max-width:600px;
        }
        td,th{
              border:1px solid gray;
               padding:5px 10px;
             font-size:1rem;
        }
    </style>
</head>
<body>
    @section("nav")
    @endsection
    <section>
        <p>Fetch section.....</p>
        <ul style="list-style: none;">
           
        @foreach ($fetch as $item)
        <li><a href="/leah/{{$item->id}}"> {{$loop->index +1}}. {{ $item->department}}</a> </li>
            
        @endforeach
        </ul>
       
       <div>
       <select id="dept">
           <option selected value="">Select Department</option>
          @foreach ($fetch as $item)  
          <option value="{{$item->id}}">{{ $item->department}}</option>
          @endforeach
       </select>
    </div>
     <div>
            <table>
                <thead>
                    <tr><th>#</th><th>Name</th><th>Email</th><th>Phone</th></thead></tr>
                <tbody id="mem"></tbody>
            </table>
        </div>
    </section>
    <script>
       
        const blade=document.getElementById("dept")
        blade.onchange=function(){
      
           if(!this.value)return;
 fetchData(this.value)
           
           
        }
        const fetchData=async(id)=>{
            const res=await fetch(`./leah/${id}`)
           
            if(res.ok){
const data=await res.json()
populateTable(data)

            }
        }
        function populateTable(data){
let input=data.map((item,i)=>`<tr>
    <td>${i+1}</td>
    <td>${item.username}</td>
    <td>${item.useremail}</td>
    <td>${item.userphone}</td>
    </tr>`).join("");
    document.querySelector("table").style.display="block"
document.getElementById("mem").innerHTML=input;
        }
    </script>
    
</body>
</html>