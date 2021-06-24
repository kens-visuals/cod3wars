const superSize = require("./index");

test("fixed tests", () => {
  expect(superSize(69)).toBe(96);
});

test("fixed tests", () => {
  expect(superSize(513)).toBe(531);
});

test("fixed tests", () => {
  expect(superSize(2017)).toBe(7210);
});

test("fixed tests", () => {
  expect(superSize(414)).toBe(441);
});

test("fixed tests", () => {
  expect(superSize(608719)).toBe(987610);
});

test("fixed tests", () => {
  expect(superSize(123456789)).toBe(987654321);
});

test("fixed tests", () => {
  expect(superSize(700000000001)).toBe(710000000000);
});

test("fixed tests", () => {
  expect(superSize(666666)).toBe(666666);
});

test("fixed tests", () => {
  expect(superSize(2)).toBe(2);
});
