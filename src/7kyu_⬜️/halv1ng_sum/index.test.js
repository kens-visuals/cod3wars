const halvingSum = require("./index");

test("fixed tests", () => {
  expect(halvingSum(25)).toBe(47);
});

test("fixed tests", () => {
  expect(halvingSum(127)).toBe(247);
});
