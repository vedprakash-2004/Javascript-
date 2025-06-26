let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
  
   console.log("code =", event.code); //ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
   if (event.code == "keyU"){
     console.log("character moves forward");
   } else if(event.code == "keyD"){
     console.log("character moves backward");
   } else if(event.code == "keyL"){
    console.log("character moves left");
   } else if (event.code == "keyR"){
    console.log("character moves right");
   }
});
   
