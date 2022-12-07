//! Task1
// const a = function () {
//   console.log("a", this);

//   const b = function () {
//     console.log("b", this);

//     const c = {
      // ! object-in icherisinde function declaration
//       hi: function () {
//         console.log("c", this);
//       },
//     };

//     c.hi();
//   };
//   b();
// };

// a();

// ! Task 2
// const obj = {
//   name: "Pranav",

//   sing: function () {
//     console.log("first this", this);

//     let anotherFunc = function () {
//       console.log("second this", this);
//     };

//     anotherFunc();
//   },
// };

// obj.sing();

// ! Task3
// var b = {
//   name: "Pranav",
//   say() {
//     console.log(this); //obj
//   },
// };

// var c = {
//   name: "Pranav",
//   say() {
//     return function () {
//       console.log(this); //global //obj
//     };
//   },
// };

// var d = {
//   name: "Pranav",
//   say() {
//     return () => console.log(this); //global (obj)
//   },
// };

// b.say();
// c.say()();
// d.say()();

// ! Task4

// var fullname = "Ismayil Rahimli";

// var obj = {
//   fullname: "Alxan Bayramov",

//   prop: {
//     fullname: "Omer Ceferov",
//     getFullName: function () {
//       return this.fullname;
//     },
//   },

//   getMyName: function () {
//     return this.fullname;
//   },

//   getFirstName: function () {
//     return this.fullname.split(" ")[0];
//   },

//   getLastName: (function () {
//     return this.fullname.split(" ")[1];
//   })(),
// };

// console.log(obj.prop.getFullName()); //omer
// console.log(obj.getFirstName());
// console.log(obj.getMyName());
// console.log(obj.getLastName);


// omer
// alxan
// alxan
// isi