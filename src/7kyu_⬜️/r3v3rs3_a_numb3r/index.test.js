const reverseNumber = require("./index");

test("fixed tests", () => {
  expect(reverseNumber(123)).toBe(321);
});

test("fixed tests", () => {
  expect(reverseNumber(-123)).toBe(-321);
});

test("fixed tests", () => {
  expect(reverseNumber(1000)).toBe(1);
});

test("fixed tests", () => {
  expect(reverseNumber(4321234)).toBe(4321234);
});

test("fixed tests", () => {
  expect(reverseNumber(5)).toBe(5);
});

test("fixed tests", () => {
  expect(reverseNumber(0)).toBe(0);
});

test("fixed tests", () => {
  expect(reverseNumber(98989898)).toBe(89898989);
});
