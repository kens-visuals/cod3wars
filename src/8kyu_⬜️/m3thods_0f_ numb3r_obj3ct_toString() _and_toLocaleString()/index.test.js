const colorOf = require("./index");

Test.assertSimilar(colorOf(255, 0, 0), "#ff0000");
showColor("#ff0000");
Test.assertSimilar(colorOf(0, 111, 0), "#006f00");
showColor("#006f00");
Test.assertSimilar(colorOf(1, 2, 3), "#010203");
showColor("#010203");

test("fixed tests", () => {
  expect(colorOf(255, 0, 0)).toBe("#ff0000");
});

test("fixed tests", () => {
  expect(colorOf(0, 111, 0)).toBe("#006f00");
});

test("fixed tests", () => {
  expect(colorOf(1, 2, 3)).toBe("#010203");
});
