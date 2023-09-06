function getData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log("Request successful");

        var response = xhttp.responseText;
        var data = JSON.parse(response);
        var list = "";
        for( d of data){
            list+= d.itemId+" "+d.itemName+" "+d.price+" "+d.quantity+" "+ d.inStock+"<br/>";
        }
        document.getElementById("items").innerHTML = list;
    }
    }

    xhttp.open('GET','http://localhost:9001/itemdemo/item/items',true);
    xhttp.getResponseHeader("Content-type","application/json");
    xhttp.send();

}

function saveData(e){

    var xhttp = new XMLHttpRequest();
    var itemId = document.getElementById("itemid").value;
    var itemName = document.getElementById("itemname").value
    var price = document.getElementById("price").value
    var quantity = document.getElementById("quantity").value
    var inStock = document.getElementById("instock").value

    var data = {
        "itemId":itemId,
        "itemName":itemName,
        "price":price,
        "quantity":quantity,
        "inStock":inStock
    }

    console.log(data);
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 201){
            console.log("Item added");
        }
    }

    xhttp.open("POST","http://localhost:9001/itemdemo/item/additem",true);
    xhttp.setRequestHeader("content-type","application/json");
    xhttp.send(JSON.stringify(data));
}