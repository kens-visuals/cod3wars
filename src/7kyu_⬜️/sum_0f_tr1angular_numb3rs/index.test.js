const sumTriangularNumbers = require("./index");

test("fixed tests", () => {
  expect(sumTriangularNumbers(6)).toBe(56);
});

test("fixed tests", () => {
  expect(sumTriangularNumbers(34)).toBe(7140);
});

test("fixed tests", () => {
  expect(sumTriangularNumbers(-291)).toBe(0);
});

test("fixed tests", () => {
  expect(sumTriangularNumbers(943)).toBe(140205240);
});

test("fixed tests", () => {
  expect(sumTriangularNumbers(-971)).toBe(0);
});
