const squareDigits = require("./index");

test("fixed tests", () => {
  expect(squareDigits(3212)).toBe(9414);
});

test("fixed tests", () => {
  expect(squareDigits(2112)).toBe(4114);
});

test("fixed tests", () => {
  expect(squareDigits(0)).toBe(0);
});
