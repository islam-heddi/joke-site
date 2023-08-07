function newjoke(){
    const request = new XMLHttpRequest();
    request.open("GET", "https://v2.jokeapi.dev/joke/Programming,Christmas");
    request.send();
    request.onload = () =>{
        console.log(request);
        if(request.status == 200){
            console.log(JSON.parse(request.response));
            var Myjoke = JSON.parse(request.response);
            document.getElementById("category").innerHTML = Myjoke.category;
            document.getElementById("joke").innerHTML = Myjoke.delivery;
        }else{
            console.log("Sorry we cant load the api !");
        }
    }
    
}