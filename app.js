let btn = document.querySelector("button");

for (btn of btns){
    btn.oneclick = sayHello;
    btn.onmouseenter = function(){
        console.log("you entered a button");
    }
    console.dir(btn);

}
function sayHello() {
    alert("Hello!");
}