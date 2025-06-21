let btns = document.querySelectorAll("button");

for (btn of btns) {
//     btn.onclick = sayHello;
//     btn.onclick = sayHello;

btn.addEventListener("click", sayHello);
btn.addEventListener("click", sayName);

}

function sayHello () {
    alert("Hello!");
}

function sayHello() {
    alert("Apna college");
}