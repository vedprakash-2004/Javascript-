consturl = "https://echo.hoppscotch.io";

async function getJokes() {
  try{
    let res = await axios.get(url);
    console.log(res);
  }catch (err){
    console.log(err);
  }
  

}