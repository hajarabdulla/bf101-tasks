const body = document.querySelector("body");
const container = document.createElement("div");
const btn = document.createElement("button");

body.appendChild(container);
body.appendChild(btn);

container.classList.add("container");
container.innerHTML = "<h1>container</h1>";

container.style.width = "200px";
container.style.height = "200px";
container.style.background = "green";

btn.innerText = "change color";

btn.addEventListener("click", () => {
  container.classList.toggle("active");
});
