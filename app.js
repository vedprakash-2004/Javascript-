// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(()=> {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//         nextColorChange = color;
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000, () => {

//                 })

//             })


//          });
    
//     });
   
// });


function savetoDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random() *10)+1;
    if(internetSpeed > 4){
        success();
    }else {
        failure(); 
    }
}

savetoDb(
    "apna college",
    () => {
        console.log("your data was saved : ");
    },
    () => {
        console.log("week connection. data not saved");
    }
);

