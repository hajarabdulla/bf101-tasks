//? DRY - Don't repeat urself

// indexleme 0 -dan bashlayir
// let names = ["Orxan", "Nazim", "Hajar"];
// let arr2 = new Array("Orxan", "Nigar");

// console.log(names);
// console.log(arr2);

// console.log(names[1]);
// console.log(names.length);

//! Multidimensional array
// ! Print elements of two dimensional array
// const arr1 = [
//   [6, 1, 2],
//   [8, 3, 5],
//   [4, 5, 7],
// ];

// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr1[i].length; j++) {
//     console.log("Element of Multidimensional array: ", arr1[i][j]);
//   }
// }

//! Print previous element from last
// let arr = ["hajar", "lala", "nurana"];
// console.log(arr[arr.length - 1]);

//! Print sum of the elements of an array
// let arr = [1, 2, 3, 7, 9];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log("sum", sum);

//! Find the max element of an array
// let arr = [1, 2, 9, 3, 9, 7, 78];
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log("max: ", max);

//! Find count of max element of an array
// let arr = [1, 2, 9, 3, 9, 7, 9];
// let max = arr[0];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   } else if (arr[i] === max) {
//     count++;
//   }
// }
// console.log("count: ", count);
// console.log("max: ", max);

//! Find the second max element of an array
// let arr = [1, 2, 9, 3, 9, 7, 9];
// let max1 = arr[0];
// let max2 = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max1) {
//     max1 = arr[i];
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max2 && arr[i] != max1) {
//     max2 = arr[i];
//   }
// }

// console.log("second max element: ", max2);

//! İf the number of an array is greater than 0 increase by 2
// const numbers = [1, 2, 4, -6];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     numbers[i] += 2;
//   }
//   console.log(numbers[i]);
// }
