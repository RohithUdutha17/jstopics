function getData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log("Request successful");

        var response = xhttp.responseXML;
        console.log(response);
        var blogdate = response.getElementsByTagName("blogdate");
        var blogauthor = response.getElementsByTagName("blog_author");
        console.log(blogauthor);
        var blog = "";
        for(let i=0;i<blogdate.length;i++){
            console.log(blogdate[i].childNodes[0].nodeValue);
            blog += blogdate[i].childNodes[0].nodeValue +"<br/>";
        }
        console.log(blog);
        document.getElementById("items").innerHTML = blog;

    }
    }

    xhttp.open('GET','data.xml',true);
    xhttp.send();


}