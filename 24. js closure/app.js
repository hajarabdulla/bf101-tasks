//! FUNCITONS

// const sum = (a, b) => {
//   return a + b; //5
// };

// const sumOfNumbers = sum;
// sumOfNumbers(2, 3);

// console.log(sumOfNumbers);

//! Closure
function outerFunction(outsideVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outside: " + outsideVariable);
    console.log("Inner: " + innerVariable);
  };
}

// outerFunction("outside")("inner")
// const newFunc = outerFunction("outside");
// newFunc("inner");

//! this

// const user = {
//   name: "Hajar",
//   surname: "Abdullayeva",
//   age: 21,

//  ! Function declaration --> object
// sayHi: function () {
//   console.log(this);
// },

//   ! Arrow fucntion --> global window
// sayHi: () => {
//   console.log(this);
// },

//   ! Funciton declaration eger bur basha object-in ichindedirse "this" -> hemin object-i verir
//   ! Amma object-in icherisindeki hansisa function-un ichindedirse "global window"-u verir
//   sayHi: function () {
//     function test() {
//       function a() {
//         function b() {
//           console.log(this);
//         }
//         b();
//       }
//       a();
//     }
//     test();
//   },

// ! Arrow function object-in icherisindedirse "this" keyword-u global window- u verir
// ! Funtion declaration-un ichindedirse object-in ozunu verir

//   sayHi: function () {
//     const test = () => {
//       console.log(this);
//     };

//     test();
//   },
// };

// user.sayHi(); //say

// const user = {
//   name: "Hajar",
//   age: 21,
//   increaseAge: function () {
//     this.age++;
//   },
// };

// user.increaseAge();
// user.increaseAge();
// user.increaseAge();
// user.increaseAge();

// console.log(user.age);

//!
// const alphabet = ["A", "B", "C", "D", "E", "H"];
// const numbers = [1, 2, 3, 4];

// const a = alphabet[0];
// const b = alphabet[1];
// const [salam,, hello] = alphabet;
// console.log(salam);
// console.log(hello);
// const [a, b, c, ...rest] = alphabet;
// console.log(rest);
// const thirdArr = [...alphabet, ...numbers]
// console.log(thirdArr);

// const numbers = [1, 2, 3, 4];
// const arr = [ ...numbers];
// const [a, ...rest] = numbers;
// const arr1 = numbers;

// numbers[0] = 9;

// console.log("numbers", numbers);
// console.log("arr", arr);
// console.log("arr1", arr1);

// const numbers = [1, 2, [5, 6], 3, 4];
// const arr = _.cloneDeep(numbers);
// const arr = [...numbers];

// numbers[2] = 99;
// console.log(arr);

// let obj = {
//   x: 23,
// };

// let obj1 = obj;
// obj.x = 24;

// console.log(obj1);
