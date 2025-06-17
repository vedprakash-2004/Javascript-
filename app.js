function sum (...args){
    for(let i=0; i< args.length; i++){
        console.log("you gave us:", args[i]);
    }
}

function main (a, b, c, d){
    console.log(arguments);
}