let btn = document.querySelector("button");
let url2 ="https://dog.ceo/api/breeds/image/random";



btn.addEventListener("click", async () =>{
  // let fact = await getFacts();
  // // console.log( fact);
  // let p = document.querySelector("#result");
  // p.innerText = fact;
});

async function getImage(){
  try{
    let res = await axios.get(url2);
    console.log(res.data.message);
  }catch (e){
    console.log("error -", e);
    return "No Image found ";
  }
}

// let url = "https://catfact.ninja/fact";


// async function getFacts(){
//   try{
//     let res = await axios.get(url);
//     return res.data.fact;
//   }catch (e){
//     console.log("error -", e);
//     return "No fact found ";
//   }
// }

