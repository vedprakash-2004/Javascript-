let btn = document.querySelector("button");
btn.addEventListener("click", async () =>{
  let fact = await getFacts();
  console.log( fact);
  let p = document.querySelector("#result");
  p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts(){
  try{
    let res = await axios.get(url);
    console.log(res.data.facts);
  }catch (e){
    console.log("error -", e);
  }
}

