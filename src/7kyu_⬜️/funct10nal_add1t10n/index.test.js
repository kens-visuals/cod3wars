const add = require("./index");

test("fixed tests", () => {
  expect(add(1)(3)).toBe(4);
});
