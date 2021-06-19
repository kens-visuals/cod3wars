// function getLength(arr) {
//   //return length of arr
//   return arr.length;
// }
// function getFirst(arr) {
//   //return the first element of arr
//   return arr[0];
// }
// function getLast(arr) {
//   //return the last element of arr
//   return arr.pop();
// }
// function pushElement(arr) {
//   var el = 1;
//   //push el to arr
//   arr.push(el);
//   return arr;
// }
// function popElement(arr) {
//   //pop an element from arr
//   arr.pop();
//   return arr;
// }

const getLength = (arr) => arr.length;

const getFirst = (arr) => arr[0];

const getLast = (arr) => arr.pop();

const pushElement = (arr) => {
  arr.push((el = 1));
  return arr;
};

const popElement = (arr) => {
  arr.pop();
  return arr;
};

module.exports = getLength;
module.exports = getFirst;
module.exports = getLast;
module.exports = pushElement;
module.exports = popElement;
