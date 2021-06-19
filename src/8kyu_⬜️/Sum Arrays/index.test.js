const sum = require("./index");

test("fixed tests", () => {
  expect(sum([])).toBe(0);
});

test("fixed tests", () => {
  expect(sum([1, 5.2, 4, 0, -1])).toBe(9.2);
});
