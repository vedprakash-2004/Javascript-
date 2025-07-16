let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);
  getColleges();
});
let country = "nepal";
async function getColleges() {
  try{
    let res = await axios.get(url + country);
    console.log(res);
  }catch (e) {
    console.log("error:", e);
    return [];
  }
}