const isTriangle = require("./index");

test("fixed tests", () => {
  expect(isTriangle(1, 2, 2)).toBe(true);
});

test("fixed tests", () => {
  expect(isTriangle(7, 2, 2)).toBe(false);
});
