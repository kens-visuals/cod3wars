const digits = require("./index");

test("fixed tests", () => {
  expect(digits(5)).toBe(1);
});

test("fixed tests", () => {
  expect(digits(12345)).toBe(5);
});

test("fixed tests", () => {
  expect(digits(9876543210)).toBe(10);
});
