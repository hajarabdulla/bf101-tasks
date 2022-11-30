//var
//let
//const

// var a = 5;
// console.log(window.a);

// let b = 5;
// console.log(a);
// console.log(b);

// console.log(a);
// const a = 7;

// b = 8;
// a = 8;

// const arr = [1, 2, 3, 4, 5];
// arr = [];

//! arr.push(10, 4); //array-in sonuna elave edir
//! arr.pop(); // array-in sonundan silir
//! arr.unshift(10); //array-in evveline elave edir
//! arr.shift(); //array-in evvelinden silir
// console.log("arr", arr);

// console.log("5==5", "5" === 5);
// console.log("[] = []", [] === []);

// == --> tipi yoxlamir, sadece deyeri yoxlayir
// === --> tipi de yoxlayor

// const arr = [];
// //! array is subtype of object
// console.log(typeof []);

// const name = prompt("Enter the name ");
// console.log(name);

// let question = confirm("hello world");
// console.log(typeof prompt);

// let res = 5 - "a";
// console.log(res);
// console.log("type of number", typeof NaN);

// console.log(typeof typeof 5);
// console.log(typeof 5);

// for (let i = 0; i < 4; i++) {
//   console.log(i);
// }
// console.log(i); //4

// 0 =false
// 1=true

// let b = 0 == false;
// console.log(b);
// console.log(typeof b);

// ! Functions

// arguments
// function sum(a, b) {
//   //   code block
//   console.log("sum of numbers", a + b);
// }

// sum(Number(prompt("Enter the first num")), 6);
// sum(+prompt("Enter the first num"), 6);
// sum(7, 5);

//! Anoymous func
// const printSmth = function () {
//   console.log("Hello world");
// };

// printSmth();

//! Arrow function
// const sum = (a, b) => a + b;

// console.log(sum(4, 5));
// console.log(typeof sum);
// void --> function hech ne return etmir

// ! Task
// let referenceType = ["Hajar", "Abdullayeva]"];
// let valueType = 41;

// function test(parameter) {
//   if (parameter[0]) {
//     parameter[0] = "Nigar";
//   } else {
//     parameter = 42;
//   }
//   console.log(parameter, "[INSIDE FUNTION");
// }

// test(referenceType); // Nigar Ab
// test(valueType); //42

// console.log(referenceType, "reference Outside the func"); //nigar ab
// console.log(valueType, "value Outside the func"); //41

//! Object
// const user = {
//   name: "Hajar",
//   age: 21,
//   myFunc: function () {
//     console.log("Hello world");
//   },
// };

// console.log(user);

// console.log(user.name);
// console.log(user.age);

// user.isMarried = false;

// console.log("user", user);
// // user.myFunc();
// console.log("keys of obj", Object.keys(user));
// console.log("values of obj", Object.values(user));
// // console.log(Object.entries(user));

// console.log(user["name"]);

// default
// function test(a = 10, b) {
//   //   console.log(arguments.length);
//   //   arguments[0] = 5;
//   a = 5;
//   console.log("argument ", arguments[0]);
//   console.log("a", a);
// }

// test(1, 2);

