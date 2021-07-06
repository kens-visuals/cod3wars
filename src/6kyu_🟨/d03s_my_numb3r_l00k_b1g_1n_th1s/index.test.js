const narcissistic = require("./index");

test("fixed tests", () => {
  expect(narcissistic(7)).toBe(true, "7 is narcissistic");
});

test("fixed tests", () => {
  expect(narcissistic(371)).toBe(true, "371 is narcissistic");
});
