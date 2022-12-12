const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Resolved");
    reject("Rejected");
  }, 1500);
});

promise
  .then((val) => {
    const newVal = val + " addition";
    return newVal;
    // throw new Error("Custom err msg");
  })
  .then((returnedVal) => {
    return returnedVal + " another addition";
  })
  .then((aaa) => {
    console.log(aaa);
  })
  .catch((err) => {
    console.log(err);
  });

