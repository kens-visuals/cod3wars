const fizzbuzz = require("./index");

const expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"];

test("fixed tests", () => {
  expect(fizzbuzz(10)).toEqual(expected);
});
