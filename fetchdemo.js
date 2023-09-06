function fetchData()
 {
 const response=fetch("http://localhost:8080/messages")
 response.then(async (e)=>{

 let res=await e.json()
 console.log(res)

    })
 
 }

async function send_data(data)
{
 const response=await fetch("http://localhost:8080/addmessage",{
 method:"POST",
 headers:{
 "Content-Type":"application/json"
        },
 body:JSON.stringify(data)
    })
 if(response.status==201)
     {
 console.log("data saved")
     }
}
send_data({messageId:1,sender:"ram",receiver:"ramesh",messageText:"hello"});

fetchData()