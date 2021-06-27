const stray = require("./index");

test("fixed tests", () => {
  expect(stray([1, 1, 2])).toBe(2);
});
