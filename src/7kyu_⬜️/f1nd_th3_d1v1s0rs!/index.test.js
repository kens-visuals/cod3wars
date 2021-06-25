const divisors = require("./index");

test("fixed tests", () => {
  expect(divisors(15)).toEqual([3, 5]);
});

test("fixed tests", () => {
  expect(divisors(12)).toEqual([2, 3, 4, 6]);
});

test("fixed tests", () => {
  expect(divisors(13)).toEqual("13 is prime");
});
