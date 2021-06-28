const gimme = require("./index");

test("fixed tests", () => {
  expect(gimme([2, 3, 1])).toBe(0);
});

test("fixed tests", () => {
  expect(gimme([5, 10, 14])).toBe(1);
});
