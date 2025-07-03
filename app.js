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


function savetoDb(data){
    let internetSpeed = Math.floor(Math.random() *10)+1;
    if(internetSpeed > 4){
        console.log("your data was saved:", data);
    }else {
        console.log("weak connection. data not save");
    }
}

