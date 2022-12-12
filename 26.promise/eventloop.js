console.log("first");

setTimeout(() => {
  console.log("middle");
}, 3000);

setTimeout(() => {
  console.log("zero");
}, 0);

const promise = new Promise((res) => {
  res("resolved");
});

promise.then((val) => console.log(val));

for (let i = 0; i <= 100000; i++) {
  if (i === 100000) {
    console.log("for loop");
  }
}

console.log("end");
