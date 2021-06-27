const breakChocolate = require("./index");

test("fixed tests", () => {
  expect(breakChocolate(5, 5)).toBe(24);
});

test("fixed tests", () => {
  expect(breakChocolate(1, 1)).toBe(0);
});
