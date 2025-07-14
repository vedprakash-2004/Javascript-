let btn = document.querySelector("button");
btn.addEventListener("click", () =>{
  console.log("button was clicked");
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

