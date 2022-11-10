const body = document.querySelector("body");
const input = document.createElement("input");
const button = document.createElement("button");
const ul = document.createElement("ul");

body.appendChild(input);
body.appendChild(button);
body.appendChild(ul);

input.setAttribute("type", "text");
button.innerText = "add";

button.addEventListener("click", () => {
  if (input.value.trim() == "") {
    input.style.border = "1px solid red";
  } else {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = input.value;
    input.style.border = "1px solid black";
    input.value = "";
  }
});
