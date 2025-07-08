h1 = document.querySelector("h1");

function changeColor(color, delay){
  new Promise((resolve, reject)=>{
      setTimeout(()=> {
      h1.style.color = color;
      resolve("color changed");
        
    }, delay);
  }); 

}

changeColor("red", 1000)
.then(()=> {
  console.log("red color was completed");
  return changeColor("orange",1000);
})
.then(() =>{
  console.log("orange color was completed");
  return changeColor("green", 1000);
})
.then(() =>{
  console.log("green color was completed");
  return changeColor("blue", 1000);
})
.then(()=>{
  console.log("blue color was completed");
});

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


// function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() *10)+1;
//     if(internetSpeed > 4){
//         success();
//     }else {
//         failure(); 
//     }
// }

// savetoDb(
//     "apna college",
//     () => {
//         console.log("success : your data was saved");
//         savetoDb(
//             "hello world",
//             () => {
//                 console.log("success2: data2 saved");
//             },
//             () => {
//                 console.log("failure : weak connection");
//             }
//         );
        
//     },
//     () => {
//         console.log("failure2 : weak connection. data not saved");
//     }
// );

// function savetoDb(data){
//     return new Promise((resolve, reject) => {
//       let internetSpeed = Math.floor(Math.random() *10)+1;
//       if (internetSpeed > 4 ){
//         resolve("success : data was saved");
//       }else{
//         reject("failure : weak connection");
//       }

//     });
   
    
// }

// savetoDb("apna college")
//   .then((result)=>{
//    console.log("data1 saved");
//    console.log("result of promise:", result);
//    return savetoDb("helloworld");
//   })
//   .then((result) =>{
//     console.log("data2 saved");
//     console.log(result);
//     return savetoDb("somu");
//   })
//   .then((result)=>{
//     console.log("data3 saved");
//     console.log(result);
//   })
//   .catch((error)=>{
//     console.log("promise was rejected");
//     console.log(error);
//   });

