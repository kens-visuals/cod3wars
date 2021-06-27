const findLongest = require("./index");

test("fixed tests", () => {
  expect(findLongest([1, 10, 100])).toBe(100);
});

test("fixed tests", () => {
  expect(findLongest([9000, 8, 800])).toBe(9000);
});

test("fixed tests", () => {
  expect(findLongest([8, 900, 500])).toBe(900);
});
