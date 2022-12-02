// !Task 5
// ?Verilmish stringdeki ededleri cemleyin --> reduce
// const b = "5,4,3,2,1";
// const arr = b.split(",").reduce((num1, num2) => Number(num1) + Number(num2), 0);
// console.log(arr);

const arr = [15, 16, 17, 18, 19];

// let sum += arr[i]
// sum = sum + arr[i];

// const sum = (accumulator, currentVal, index) => {
//   const result = accumulator + currentVal;
//   console.log(
//     `accumulator: ${accumulator}, currentVal: ${currentVal}, index: ${index} result: ${result}`
//   );
//   return result;
// };

// console.log(arr.reduce(sum, 0));
// reducer 2 deyer gebul edir, 1ci deyer cb func; 2ci deyer initialVal
// cb fn ise 4deyer gebul edir --> 1ci current val, accumulator,index, arr
