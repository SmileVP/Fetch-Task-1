var res=fetch("https://jsonplaceholder.typicode.com/posts");
 res.then((data)=>data.json())
.then((data1)=>foo(data1));



function foo(arr){
        for(var i=0;i<5;i++){
            //console.log(arr[i].name);
            var div=document.createElement("div");
            div.style.color="green";
            div.style.fontSize="22px";
            // div.innerHTML=`${arr[i].name}`;
            div.innerHTML=`<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${arr[i].userId}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${arr[i].id}</h6>
              <h6 class="card-subtitle mb-2 text-muted">${arr[i].title}</h6>
              <h6 class="card-subtitle mb-2 text-muted">${arr[i].body}</h6>
              </div>
          </div>`;
            document.body.append(div);
        }
        }