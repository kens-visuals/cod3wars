// function howManySmaller(arr, n) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toFixed(2) < n) count++;
//   }
//   return count;
// }

// function howManySmaller(arr, n) {
//   let sum = 0;
//   for (const i of arr) i.toFixed(2) < n ? sum++ : null;
//   return sum;
// }

const howManySmaller = (arr, n) => arr.filter((el) => el.toFixed(2) < n).length;

module.exports = howManySmaller;
