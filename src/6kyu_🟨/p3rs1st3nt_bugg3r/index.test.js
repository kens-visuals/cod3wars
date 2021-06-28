const persistence = require("./index");

test("fixed tests", () => {
  expect(persistence(39)).toBe(3);
});

test("fixed tests", () => {
  expect(persistence(4)).toBe(0);
});

test("fixed tests", () => {
  expect(persistence(999)).toBe(4);
});
