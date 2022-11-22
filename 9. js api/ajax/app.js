window.addEventListener("load", () => {
  console.log("window loaded");

  function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.response);
        console.log(JSON.parse(xhttp.response));
      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/comments");
    xhttp.send();
  }

  loadDoc();
});
