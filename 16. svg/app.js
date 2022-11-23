const sofaSvg = document.querySelector(".svg-item");
const colorPicker = document.querySelector(".color-picker");

// input change

colorPicker.addEventListener("input", () => {
  //   sofaSvg.setAttribute("fill", colorPicker.value);
  sofaSvg.style.fill = colorPicker.value;
});
