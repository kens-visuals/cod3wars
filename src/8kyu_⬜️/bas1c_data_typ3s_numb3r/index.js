// let v1 = 50,
//   v2 = 100,
//   v3 = 150,
//   v4 = 200,
//   v5 = 2,
//   v6 = 250;

// function equal1() {
//   var a = v1;
//   var b = v1;
//   return a + b;
// }
// //Please refer to the example above to complete the following functions
// function equal2() {
//   var a = v3; //set number value to a
//   var b = v1; //set number value to b
//   return a - b;
// }

// function equal3() {
//   var a = v1; //set number value to a
//   var b = v5; //set number value to b
//   return a * b;
// }

// function equal4() {
//   var a = v4; //set number value to a
//   var b = v5; //set number value to b
//   return a / b;
// }

// function equal5() {
//   var a = v6; //set number value to a
//   var b = v3; //set number value to b
//   return a % b;
// }

let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;

const equal1 = (a = v1, b = v1) => a + b;
const equal2 = (a = v3, b = v1) => a - b;
const equal3 = (a = v5, b = v1) => a * b;
const equal4 = (a = v4, b = v5) => a / b;
const equal5 = (a = v6, b = v3) => a % b;

module.exports = equal1;
module.exports = equal2;
module.exports = equal3;
module.exports = equal4;
module.exports = equal5;
