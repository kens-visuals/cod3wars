const evenNumbers = require("./index");

test("fixed tests", () => {
  expect(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([4, 6, 8]);
});

test("fixed tests", () => {
  expect(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)).toEqual([
    -8,
    26,
  ]);
});

test("fixed tests", () => {
  expect(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)).toEqual([6]);
});
