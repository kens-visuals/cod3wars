const factorial = require("./index");

test("fixed tests", () => {
  expect(factorial(0)).toBe(1);
});

test("fixed tests", () => {
  expect(factorial(1)).toBe(1);
});

test("fixed tests", () => {
  expect(factorial(2)).toBe(2);
});

test("fixed tests", () => {
  expect(factorial(3)).toBe(6);
});
