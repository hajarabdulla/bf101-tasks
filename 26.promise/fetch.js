const result = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((json) => console.log(json));

console.log(result);


try {
    const response = await  fetch("https://jsonplaceholder.typicode.com/todos");
    
  } catch (error) {
    // TypeError: Failed to fetch
    console.log('There was an error', error);
  }