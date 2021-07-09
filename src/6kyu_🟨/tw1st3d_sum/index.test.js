const twistedSum = require("./index");

test("fixed tests", () => {
  expect(twistedSum(3)).toBe(6);
});

test("fixed tests", () => {
  expect(twistedSum(10)).toBe(46);
});

test("fixed tests", () => {
  expect(twistedSum(11)).toBe(48);
});

test("fixed tests", () => {
  expect(twistedSum(12)).toBe(51);
});
