let greet ="hell0";

function changeGreet(){
    let greet = "nameste";
    console.log(greet);
    function innerGreen(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet();