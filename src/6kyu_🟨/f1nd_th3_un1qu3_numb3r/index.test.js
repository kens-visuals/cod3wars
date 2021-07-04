const findUniq = require("./index");

test("fixed tests", () => {
  expect(findUniq([0, 1, 0])).toBe(1);
});

test("fixed tests", () => {
  expect(findUniq([1, 1, 1, 2, 1, 1])).toBe(2);
});

test("fixed tests", () => {
  expect(findUniq([3, 10, 3, 3, 3])).toBe(10);
});
