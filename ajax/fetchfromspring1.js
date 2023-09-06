function getData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log("Request successful");

        var response = xhttp.responseText;
        var data = JSON.parse(response);
        var list = "";
        for( d of data){
            list+= d.messageId+" "+d.sender+" "+d.receiver+" "+d.messageText+"<br/>";
        }
        document.getElementById("items").innerHTML = list;
    }
    }

    xhttp.open('GET','http://localhost:8080/messages',true);
    xhttp.getResponseHeader("Content-type","application/json");
    xhttp.send();

}

function saveData(e){

    var xhttp = new XMLHttpRequest();
    var messageId = document.getElementById("messageid").value;
    var sender = document.getElementById("sender").value
    var receiver = document.getElementById("receiver").value
    var messageText = document.getElementById("messagetext").value

    var data = {
        "messageId":messageId,
        "sender":sender,
        "receiver":receiver,
        "messageText":messageText,
    }

    console.log(data);
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 201){
            console.log("Item added");
        }
    }

    xhttp.open("POST","http://localhost:8080/addmessage",true);
    xhttp.setRequestHeader("content-type","application/json");
    xhttp.send(JSON.stringify(data));
}


function updateData(e){

    var xhttp = new XMLHttpRequest();
    var messageId = document.getElementById("messageid").value;
    var sender = document.getElementById("sender").value
    var receiver = document.getElementById("receiver").value
    var messageText = document.getElementById("messagetext").value

    var data = {
        "messageId":messageId,
        "sender":sender,
        "receiver":receiver,
        "messageText":messageText,
    }

    console.log(data);
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 202){
            console.log(xhttp.responseText);
        }
    }

    xhttp.open("PATCH","http://localhost:8080/updatemessage",true);
    xhttp.setRequestHeader("content-type","application/json");
    xhttp.send(JSON.stringify(data));
}