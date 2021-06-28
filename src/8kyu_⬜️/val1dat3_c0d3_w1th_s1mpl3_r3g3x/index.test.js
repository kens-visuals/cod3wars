const validateCode = require("./index");

test("fixed tests", () => {
  expect(validateCode(123)).toBe(true);
});

test("fixed tests", () => {
  expect(validateCode(248)).toBe(true);
});

test("fixed tests", () => {
  expect(validateCode(8)).toBe(false);
});

test("fixed tests", () => {
  expect(validateCode(321)).toBe(true);
});

test("fixed tests", () => {
  expect(validateCode(9453)).toBe(false);
});
