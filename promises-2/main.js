//! Async await
const URL = "https://jsonplaceholder.typicode.com/users";
const loading = document.querySelector("h1");
const container = document.querySelector(".container");
const sort = document.querySelector("#sort");

window.addEventListener("load", async () => {
  let users = await getData(URL);
  createUserCard(users);
});

function setLoader(condition) {
  if (condition) {
    loading.innerHTML = "loading...";
    container.innerHTML = "";
  } else {
    loading.innerHTML = "";
  }
}

async function getData(api) {
  setLoader(true);
  let response = await fetch(api);
  
  if (!response.ok) return;

  setLoader(false);
  return await response.json();
}

function createUserCard(arr) {
  arr.map((user) => {
    container.innerHTML += `<div class="card" style="width: 18rem;">
                <img src="./hjr.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text"><span>E-mail: </span>${user.email}</p>
                    <p><span>Address street: </span>${user.address.street}</p>
                    <p><span>Adress city: </span> ${user.address.city}</p>
                    <p><span>Phone: </span> ${user.phone}</p>
                    <p><span>Comapny name: </span>${user.company.name}</p>
                </div>
            </div>`;
  });
}

sort.addEventListener("change", async (e) => {
  let users = await getData(URL);

  if (sort.value === "username") {
    let sorted = users.sort((a, b) => a.username.localeCompare(b.username));
    createUserCard(sorted);
  } else {
    let sorted = users.sort((a, b) => a.id - b.id);
    createUserCard(sorted);
  }
});
