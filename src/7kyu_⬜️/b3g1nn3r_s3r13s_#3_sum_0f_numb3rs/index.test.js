const getSum = require("./index");

test("fixed tests", () => {
  expect(getSum(0, -1)).toBe(-1);
});

test("fixed tests", () => {
  expect(getSum(0, 1)).toBe(1);
});
