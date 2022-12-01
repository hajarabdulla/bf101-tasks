// ! Screen
// console.log(window.screen);
// console.log("availHeight: ", window.screen.availHeight);
// console.log("availWidth: ", window.screen.availWidth);

// console.log("height", window.screen.height);
// console.log("width", window.screen.width);

// console.log(window.innerHeight);
// console.log(window.innerWidth);

const box = document.querySelector(".box");
// console.log(box.clientHeight);
// console.log(box.clientWidth);
// console.log(parseInt(window.getComputedStyle(box).width));
// console.log(window.getComputedStyle(box).height);

// window.location.assign("https://www.google.com/maps");
// window.location = "https://www.google.com/maps"

// box.addEventListener("click", (event) => {
//   console.log(event.target);
// });

// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

// const button = document.querySelector("button");
// button.addEventListener("click", (e) => {
//   console.log("Button clicked");
//   e.stopPropagation();
// });

// box.addEventListener("click", () => {
//   console.log("Box clicked");
// });

// window.addEventListener("keydown", (e) => {
//   console.log(e.key);
//   if (e.key == "j") {
//     document.querySelector("body").innerHTML = "<h1>Hello from this side</h1>";
//   } else if ((e.key = " ")) {
//     document.querySelector("body").innerHTML = "<h1>Hello from other side</h1>";
//   } else {
//     document.querySelector("body").innerHTML = "<h1>Hello </h1>";
//   }
// });

box.addEventListener("mouseleave ", (e) => {
  e.style.backgroundColor = "red";
  console.log("hello");
});

console.log();
