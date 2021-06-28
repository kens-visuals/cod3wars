const sumOfDifferences = require("./index");

test("fixed tests", () => {
  expect(sumOfDifferences([1, 2, 10])).toBe(9);
});

test("fixed tests", () => {
  expect(sumOfDifferences([-3, -2, -1])).toBe(2);
});
