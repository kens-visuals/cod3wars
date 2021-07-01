const minSum = require("./index");

test("fixed tests", () => {
  expect(minSum([5, 4, 2, 3])).toBe(22);
});

test("fixed tests", () => {
  expect(minSum([12, 6, 10, 26, 3, 24])).toBe(342);
});

test("fixed tests", () => {
  expect(minSum([9, 2, 8, 7, 5, 4, 0, 6])).toBe(74);
});
