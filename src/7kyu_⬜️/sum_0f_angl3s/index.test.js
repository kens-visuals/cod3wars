const angle = require("./index");

test("fixed tests", () => {
  expect(angle(3)).toBe(180);
});

test("fixed tests", () => {
  expect(angle(4)).toBe(360);
});
