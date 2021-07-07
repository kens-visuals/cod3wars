const triangular = require("./index");

test("fixed tests", () => {
  expect(triangular(2)).toBe(3);
});

test("fixed tests", () => {
  expect(triangular(4)).toBe(10);
});
