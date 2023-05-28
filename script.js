const jokecons=document.querySelector(".joke");
const btn=document.querySelector(".btn");

const url="https://v2.jokeapi.dev/joke/Any?type=single";


async function givejoke(){
    const response=await fetch(url);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".joke").style.display="none";

    }
    else{
        var data=await response.json();
        console.log(data);
    
        jokecons.innerHTML=data.joke;
        document.querySelector(".error").style.display="none";
        document.querySelector(".joke").style.display="block";
    }
  

}


btn.addEventListener("click",()=>{
    givejoke();
})






