// const referenceType = {
//   name: "Hajar",
// };
// const valueType = 42;

// const test = (parameter) => {
//   if (parameter.name) {
//     parameter.name = "Nigar";
//   } else {
//     parameter = 41;
//   }
//   console.log(parameter, "[FROM THE FUNCTION]");
// };

// test(referenceType);
// test(valueType);

// console.log(referenceType, "Outside the func reference type");
// console.log(valueType, "Outside the func value type");

// const a = [1, 5];
// const b = [1, 5];
// if (a == b) {
//   console.log(a);
// }

function checkArgs(a, b) {
  //   [...arguments].forEach((elem) => {
  //     console.log(elem);
  // })
  //   Array.prototype.slice.call(arguments).forEach((elem) => {
  //     console.log(elem);
  //   });
  Array.from(arguments).forEach((elem) => {
    console.log(elem);
  });
}

// function checkArgs() {
//   //   console.log(arguments);
//   console.log("salam");
// }

// checkArgs(1, 2);

const animals = ["ant", "bison", "camel", "duck", "elephant"];
const newArr = animals.slice(2);

console.log(animals);
console.log("newArr", newArr);
