// function pickIt(arr) {
//   var odd = [],
//     even = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] % 2 !== 0 ? odd.push(arr[i]) : even.push(arr[i]);
//   }

//   return [odd, even];
// }

// function pickIt(arr) {
//   var odd = [],
//     even = [];

//   for (let i of arr) i % 2 === 0 ? even.push(i) : odd.push(i);

//   return [odd, even];
// }

const pickIt = (arr) => {
  const odd = [],
    even = [];

  for (let i of arr) (i % 2 ? odd : even).push(i);

  return [odd, even];
};

module.exports = pickIt;
