const digPow = require("./index");

test("fixed tests", () => {
  expect(digPow(89, 1)).toBe(1);
});

test("fixed tests", () => {
  expect(digPow(92, 1)).toBe(-1);
});

test("fixed tests", () => {
  expect(digPow(46288, 3)).toBe(51);
});
