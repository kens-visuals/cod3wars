const binaryArrayToNumber = require("./index");

test("fixed tests", () => {
  expect(binaryArrayToNumber([0, 0, 0, 1])).toBe(1);
});

test("fixed tests", () => {
  expect(binaryArrayToNumber([0, 0, 1, 0])).toBe(2);
});

test("fixed tests", () => {
  expect(binaryArrayToNumber([1, 1, 1, 1])).toBe(15);
});

test("fixed tests", () => {
  expect(binaryArrayToNumber([0, 1, 1, 0])).toBe(6);
});
