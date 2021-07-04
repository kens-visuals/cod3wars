const isPowerOfTwo = require("./index");

test("fixed tests", () => {
  expect(isPowerOfTwo(2)).toBe(true);
});

test("fixed tests", () => {
  expect(isPowerOfTwo(4096)).toBe(true);
});

test("fixed tests", () => {
  expect(isPowerOfTwo(5)).toBe(false);
});
