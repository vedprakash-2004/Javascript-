let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log(event.key);
    console.log("conde =", event.code);
    console.log("key was pressed");
});
   
