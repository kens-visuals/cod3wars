const digital_root = require("./index");

test("fixed tests", () => {
  expect(digital_root(16)).toBe(7);
});

test("fixed tests", () => {
  expect(digital_root(456)).toBe(6);
});
