// alert("hello");

const body = document.querySelector("body");

let button1 = document.createElement("BUTTON");
let button2 = document.createElement("BUTTON");
let button3 = document.createElement("BUTTON");
let button4 = document.createElement("BUTTON");

document.body.appendChild(button1);
document.body.appendChild(button2);
body.appendChild(button3);
body.appendChild(button4);

button1.innerText = "show";
button2.innerText = "hide";
button3.innerText = "start time";
button4.innerText = "stop time";

button1.addEventListener("click", () => {
  myFunc = setTimeout(() => {
    alert("Hello,Uzeyir");
  }, 5000);
  console.log("i clicked");
});

button2.addEventListener("click", function () {
    clearTimeout(myFunc);
    console.log("Goodbye Uzeyir");
});

button3.addEventListener("click",() => {
    startTime = setInterval(() => {
        const date = new Date();
        console.log(date.toLocaleTimeString("en-GB"));
    },1+000)
})

button4.addEventListener("click", () => {
    clearInterval(startTime);
})