const isDigit = require("./index");

test("fixed tests", () => {
  expect(isDigit("s2324")).toBe(false);
});

test("fixed tests", () => {
  expect(isDigit("-234.4")).toBe(true);
});
