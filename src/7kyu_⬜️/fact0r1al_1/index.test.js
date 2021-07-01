const factorial = require("./index");

test("fixed tests", () => {
  expect(factorial(0)).toBe(1);
});

test("fixed tests", () => {
  expect(factorial(1)).toBe(1);
});

test("fixed tests", () => {
  expect(factorial(4)).toBe(24);
});

test("fixed tests", () => {
  expect(factorial(7)).toBe(5040);
});

test("fixed tests", () => {
  expect(factorial(17)).toBe(355687428096000);
});
