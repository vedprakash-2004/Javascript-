function multipleGreet (func, cout){
    for(let i=1; i<=count ; i++){
        func();
    }
} 
let greet = function() {
    console.log("hello");
}
multipleGreet(greet(), 10);