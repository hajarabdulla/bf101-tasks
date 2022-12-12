// const g = () => {
//   setTimeout(() => {
//     return 42;
//   }, 1500);
// };

const g = () => {
  return new Promise((res) => {
    res(42);
  });
};

// const f = () => {
//   const res = g();
//   console.log(res);
// };

const f = async () => {
  try {
    const res = await g();
    console.log(res, "FROM ASYNC");
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Finally from async");
  }
};

const f1 = () => {
  g()
    .then((val) => console.log(val, "FROM THEN"))
    .catch((err) => console.log(err))
    .finally(() => console.log("This is finally from then"));
};

f();
f1();
