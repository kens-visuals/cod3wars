const maxNumber = require("./index");

test("fixed tests", () => {
  expect(maxNumber(213)).toBe(321);
});

test("fixed tests", () => {
  expect(maxNumber(7389)).toBe(9873);
});

test("fixed tests", () => {
  expect(maxNumber(63792)).toBe(97632);
});

test("fixed tests", () => {
  expect(maxNumber(566797)).toBe(977665);
});

test("fixed tests", () => {
  expect(maxNumber(1000000)).toBe(1000000);
});
