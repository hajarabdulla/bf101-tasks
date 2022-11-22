const form = document.querySelector("form");
const container = document.querySelector(".container");
const loading = document.createElement("div");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = document.querySelector("input").value;

  loading.innerHTML = `
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>`;

  form.insertAdjacentElement("afterend", loading);
  const url = `https://api.github.com/users/${value}`;

  axios.get(url).then((res) => {
    let user = res.data;

    container.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src=${user.avatar_url} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <p class="card-text">${user.location}</p>
                <a href=${user.html_url} class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    
    `;
    loading.innerText = "";
  });
});
