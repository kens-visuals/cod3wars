const twoSum = require("./index");

test("fixed tests", () => {
  expect(twoSum([1, 2, 3], 4).sort((a, b) => a - b)).toEqual([0, 2]);
});

test("fixed tests", () => {
  expect(twoSum([1234, 5678, 9012], 14690).sort((a, b) => a - b)).toEqual([
    1,
    2,
  ]);
});

test("fixed tests", () => {
  expect(twoSum([2, 2, 3], 4).sort((a, b) => a - b)).toEqual([0, 1]);
});
