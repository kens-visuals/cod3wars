const nthSmallest = require("./index");

test("fixed tests", () => {
  expect(nthSmallest([1, 5], [2], [4, 8, 9], 4)).toBe(5);
});
