const sumDigits = require("./index");

test("fixed tests", () => {
  expect(sumDigits(10)).toBe(1);
});

test("fixed tests", () => {
  expect(sumDigits(99)).toBe(18);
});

test("fixed tests", () => {
  expect(sumDigits(-32)).toBe(5);
});
