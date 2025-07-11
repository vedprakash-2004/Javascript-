h1 = document.querySelector("h1");

function changeColor(color, delay){
  new Promise((resolve, reject)=>{
      setTimeout(()=> {
      h1.style.color = color;
      resolve("color changed");
        
    }, delay);
  }); 

}

async function demo() {
  await changeColor("red", 1000);
  await changeColor("orange", 1000);
  await changeColor("green", 1000);
  await changeColor("blue",1000);

  let a = 5;
  console.log(a);
  console.log("new number = ", a+3);
}

// changeColor("red", 1000)
// .then(()=> {
//   console.log("red color was completed");
//   return changeColor("orange",1000);
// })
// .then(() =>{
//   console.log("orange color was completed");
//   return changeColor("green", 1000);
// })
// .then(() =>{
//   console.log("green color was completed");
//   return changeColor("blue", 1000);
// })
// .then(()=>{
//   console.log("blue color was completed");
// });


// function greet(){
//   throw "weak connection";
//   return "Hello!";
// }

// greet()
// .then((result)=>{
//   console.log("promise was resolved");
//   console.log("result was :", result);

// })
// .catch((err)=>{
//   console.log("promise was rejected with err: ", err);
// });

// let demo = async () => {
//   return 5;
// };


// function getNum() {
//   return new Promise((resolve, reject)=> {
//     setTimeout(() => {
//        let num = Math.floor (Math.random() *10)+1;
//        console.log(num);
//        resolve();
//     }, 1000);
  

//   });
// }

// async function  demo() {
// await getNum();
//  await getNum();
//  getNum();
// }