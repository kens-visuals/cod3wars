const isSquare = require("./index");

test("fixed tests", () => {
  expect(isSquare(-1)).toBe(false);
});

test("fixed tests", () => {
  expect(isSquare(0)).toBe(true);
});

test("fixed tests", () => {
  expect(isSquare(3)).toBe(false);
});

test("fixed tests", () => {
  expect(isSquare(4)).toBe(true);
});

test("fixed tests", () => {
  expect(isSquare(25)).toBe(true);
});

test("fixed tests", () => {
  expect(isSquare(26)).toBe(false);
});
