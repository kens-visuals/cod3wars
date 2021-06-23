const colorOf = require("./index");

test("fixed tests", () => {
  expect(colorOf(255, 0, 0)).toBe("#ff0000");
});

test("fixed tests", () => {
  expect(colorOf(0, 111, 0)).toBe("#006f00");
});

test("fixed tests", () => {
  expect(colorOf(1, 2, 3)).toBe("#010203");
});
