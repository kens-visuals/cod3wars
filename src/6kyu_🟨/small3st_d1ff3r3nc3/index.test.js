const smallestDiff = require("./index");

let min = 0;
let arr1 = [1, 3, 5, 23, 5];
let arr2 = [45, 34, 67, 2, 0];
let longArr = [
  23,
  4,
  4,
  2,
  5,
  6,
  3434,
  5,
  7788,
  3,
  2,
  45,
  2,
  56,
  78,
  89,
  900,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  10,
  5,
  7,
  23,
  2222,
  45,
  34,
  56,
  56,
  23,
  45,
  56,
  45454,
  33,
  45,
  12,
  16,
  23,
  2,
  67,
  78,
  7,
  99,
  31,
  27,
  14,
  13,
  56,
  72,
  2,
  78,
  89,
  34,
  33,
  2,
  22,
  55,
  6,
  22,
  19,
  45,
  37,
  19,
  10,
  2,
  3,
  4,
  9,
];
let negArr = [-3, -1, -5, -56];

test("fixed tests", () => {
  expect(smallestDiff([], [])).toBe(-1);
});

test("fixed tests", () => {
  expect(smallestDiff(arr1, [])).toBe(1);
});

test("fixed tests", () => {
  expect(smallestDiff(arr2, [])).toBe(0);
});

test("fixed tests", () => {
  expect(smallestDiff(arr1, arr2)).toBe(1);
});

test("fixed tests", () => {
  expect(smallestDiff(arr1, longArr)).toBe(0);
});

test("fixed tests", () => {
  expect(smallestDiff(negArr, longArr)).toBe(3);
});
