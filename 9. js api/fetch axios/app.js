// fetch("https://northwind.vercel.app/api/suppliers")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log("err", err));

const container = document.querySelector(".container");

let url = "https://picsum.photos/v2/list";

axios.get(url).then((res) => {
  let user = res.data;

  user.map((element) => {
    container.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src=${element?.download_url} class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${element?.author}</h5>
              <p class="card-text">Width: ${element?.width}</p>
              <p class="card-text">Height: ${element?.height}</p>
              <a href=${element.url} class="btn btn-primary">Go somewhere</a>
        </div>
         </div>
    `;
  });
});
