const multiply = require("./index");

test("fixed tests", () => {
  expect(multiply(1, 1)).toBe(1);
});

test("fixed tests", () => {
  expect(multiply(2, 1)).toBe(2);
});

test("fixed tests", () => {
  expect(multiply(2, 2)).toBe(4);
});

test("fixed tests", () => {
  expect(multiply(3, 5)).toBe(15);
});
