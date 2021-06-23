// function cutIt(arr) {
//   let newArr = [],
//     small = arr[0].length;

//   for (let i of arr) if (i.length < small) small = i.length;

//   for (let i of arr) newArr.push(i.slice(0, small));

//   return newArr;
// }

// function cutIt(arr) {
//   const minLength = Math.min(...arr.map((x) => x.length));
//   return arr.map((x) => x.slice(0, minLength));
// }

const cutIt = (arr) =>
  arr.map((el) => el.slice(0, Math.min(...arr.map((el) => el.length))));

module.exports = cutIt;
