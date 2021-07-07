const validate = require("./index");

test("fixed tests", () => {
  expect(validate(123)).toBe(false);
});

test("fixed tests", () => {
  expect(validate(1)).toBe(false);
});

test("fixed tests", () => {
  expect(validate(2121)).toBe(true);
});

test("fixed tests", () => {
  expect(validate(1230)).toBe(true);
});
