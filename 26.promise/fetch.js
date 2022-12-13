// ! Get then
// const fetchMovieThen = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then((res) => res.json())
//     .then((data) => console.log("data from then", data))
//     .catch((err) => console.log(err));
// };

// fetchMovieThen();

// ! Get async await
// const fetchMovieAsync = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
//   const data = await res.json();
//   return data;
// };

// fetchMovieAsync().then((movies) => {
//   console.log("data from async", movies); // fetched movies
// });

//! Get async await
// const getData = async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/todos/"
//   );

//   if (!response.ok) {
//     const message = `An error has occured: ${response.status}`;
//     throw new Error(message);
//   }

//   console.log(response);
//   return response;
// };

// getData().catch((err) => console.log(err));

//! Post
const bodyData = {
  id: 9,
  description: "Hello from BF101 to Cagatay Yildiz",
  name: "Hajar's Students",
};

const post = document.querySelector("#post");
const deleteData = document.querySelector("#delete");
const URL = "https://northwind.vercel.app/api/categories";

post.addEventListener("click", async () => {
  const categories = await fetch(URL, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });
  const res = await categories.json();
  console.log(res);
});

deleteData.addEventListener("click", async () => {
  await fetch(`https://northwind.vercel.app/api/categories/9`, {
    method: "DELETE",
  });
});
