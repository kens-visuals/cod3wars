const rowSumOddNumbers = require("./index");

test("fixed tests", () => {
  expect(rowSumOddNumbers(1)).toBe(1);
});

test("fixed tests", () => {
  expect(rowSumOddNumbers(42)).toBe(74088);
});
