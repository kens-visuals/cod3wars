const findDigit = require("./index");

test("fixed tests", () => {
  expect(findDigit(5673, 4)).toBe(5);
});

test("fixed tests", () => {
  expect(findDigit(129, 2)).toBe(2);
});

test("fixed tests", () => {
  expect(findDigit(-2825, 3)).toBe(8);
});

test("fixed tests", () => {
  expect(findDigit(-456, 4)).toBe(0);
});

test("fixed tests", () => {
  expect(findDigit(0, 20)).toBe(0);
});

test("fixed tests", () => {
  expect(findDigit(65, 0)).toBe(-1);
});

test("fixed tests", () => {
  expect(findDigit(24, -8)).toBe(-1);
});
