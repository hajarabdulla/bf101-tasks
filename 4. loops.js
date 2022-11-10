//! Print "Hello world" 100 times

//? for
// for (let i = 1; i <= 100; i++) {
//   console.log(i, "Hello world");
// }

//? while
// let i = 1;

// while (i <= 100) {
//   console.log(i, "Hello world");
//   i++;
// }

//! Print numbers from 0 to 10

//? for
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

//? while
// let num = 0;

// while (num <= 10) {
//   console.log(num);
//   num++;
// }

//! Infinity loop
//? for
// for (;;) {
//   console.log("Hello world");
// }

//? while
// while (true) {
//   console.log("Hello world");
// }

//! infinity loop and break

//? for
// let num = 0;
// for (;;) {
//   console.log(num, "Infinite loop");
//   num++;
//   if (num == 4) {
//     console.log("Terminal terminated");
//     break;
//   }
// }

//? while
// let num = 0;
// while (true) {
//   console.log(num, "Infinite loop");
//   num++;
//   if (num == 4) {
//     console.log("Terminal terminated");
//     break;
//   }
// }

//! Continue
//? for
// for (let i = 0; i <= 10; i++) {
//   if (i == 4) {
//     continue;
//   }
//   console.log(i, "Hello world");
// }

//? while
// let num = 0;
// while (num <= 10) {
//   num++;
//   if (num == 4) {
//     continue;
//   }
//   console.log(num, "salam");
// }

//! Do while
// let num = 0;

// do {
//   console.log(num, "salam");
//   num++;
// } while (num <= 4);

//? task
// let n = 5;
// do {
//   console.log("Hello");
// } while (n < 0);

//! 45-den 15-e geder hem 3-e, hem de 4-e bolunen ededleri ve hemin ededlerin sayini tapin
// let n = 15;
// let m = 45;
// let count = 0;

// if (n > m) {
//   console.log("Interval duzgun deyil");
// } else {
//   for (let i = n; i <= m; i++) {
//     if (i % 3 == 0 && i % 4 == 0) {
//       count++;
//       console.log(i);
//     }
//   }
//   console.log("count: ", count);
// }

//! Verilmish ededin 1ci ve sonuncu reqemlerinin cemini tapin
// let n = 12345;
// let lastNumber = n % 10;
// let firstNumber = n;

// while (firstNumber >= 10 || firstNumber <= -10) {
//   firstNumber /= 10;
// }
// console.log(parseInt(firstNumber) + lastNumber);
