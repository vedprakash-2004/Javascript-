let btn = document.querySelector("button");

for (btn of btns){
    btn.oneclick = sayHello;

}
function sayHello() {
    alert("Hello");
}