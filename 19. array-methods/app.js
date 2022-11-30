// console.log(a);
// console.log(b);
// console.log(c);

// //! Hoisting
// var b = "b";

// //! Declaration
// function a() {
//   console.log("a");
// }

// //! Expression
// var c = function c() {
//   console.log("c");
// };

// console.log("bar:", bar); //15  //undefined
// bar = 15;
// var foo = 1;
// console.log("foo: ", foo, "bar: ", bar); //1, 15
// var bar;

// function foo() {
//   let a = (b = 0);
//   a++;
//   return a;
// }

// foo();
// console.log('a', typeof a); //number, string, und
// // console.log("a", a); //1,
// console.log('b', typeof b); //undef
// console.log("b", b); //0

// console.log('2' + 1); //21
// console.log(2 + false); //2 , false
// console.log(2 + true); //3
// console.log('2' - true); //1, error, 20, NaN
// console.log('2' - 1); //1, NaN
// console.log('x' * 1); //x, NaN
// console.log(1 - '2'); //-1, NaN

// const numArray = [0, 1, 2, 3, 4];
// numArray[10] = 9;
// console.log(numArray);
// console.log(numArray[10]);

// filter, map, every, foreach,

const arr = [1, 2, 3, 5, 18, 19, 41];

//! forEach
// arr.forEach((elem, index, arr) => {
//   // console.log(`Number ${elem} with the index of ${index}`);
//   console.log(arr);
// });

// value, index, array

//! some
// const arr = [1, 2, 3, 5, 18, 19, 41];

// const checkAge = (elem) => elem > 42;

// console.log(arr.some(checkAge));
// const checkAge = (elem) => {
//   return elem > 18;
// };

//! every
// const checkAge = (elem) => elem > 42;
// console.log(arr.every(checkAge));

// const res = arr.every((elem) => {
//   return elem > 18;
// });
// console.log(res);

//! filter
// const checkAge = (elem) => elem > 18;

// console.log(arr.filter(checkAge));

// arr.filter((elem, index) => {
// });

//! find
// function checkAge(elem) {
//   return elem % 2==0;
// }

// console.log(arr.find(checkAge));

//! map
// function checkAge(elem) {
//   return elem + 10;
// }
// const newArr = arr.map(checkAge);
// console.log(arr.map(checkAge));

// // const newArr = arr.map((elem) => {
// //   return elem + 10;
// // });
// console.log(arr);
// console.log(newArr);

// class

// number string ,object

// const str = new String("hajar")

// function Animal(name, color) {
//   this.name = name;
//   this.color = color;
// }

// const animal = new Animal("Tiger", "orange ");

//! class

// class Animal {
//   #name;
//   constructor(name, color) {
//     this.#name = name;
//     this.color = color;
//   }

//   //   makeNoise() {
//   //     console.log(this.name);
//   //   }

//   get getName() {
//     return this.#name;
//   }

//   set setName(value) {
//     this.#name = value;
//   }
// }

// const animal = new Animal("Tiger", "orange ");
// // animal.name = "cat";
// console.log(animal);
// console.log(animal.name);

//! inheritance
// class Person {
//   constructor(name, age) {
//     this.name = "Hajar";
//     this.age = 21;
//   }
// }

// class Woman extends Person {
//   constructor(surname) {
//     super();
//     this.surname = "Abdullayev";
//   }
// }
// const w1 = new Woman();
// console.log(w1);
