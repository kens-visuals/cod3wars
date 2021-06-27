const sequenceSum = require("./index");

test("fixed tests", () => {
  expect(sequenceSum(2, 6, 2)).toBe(12);
});

test("fixed tests", () => {
  expect(sequenceSum(1, 5, 1)).toBe(15);
});

test("fixed tests", () => {
  expect(sequenceSum(1, 5, 3)).toBe(5);
});
