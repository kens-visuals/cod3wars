const maxMultiple = require("./index");

test("fixed tests", () => {
  expect(maxMultiple(2, 7)).toBe(6);
});

test("fixed tests", () => {
  expect(maxMultiple(3, 10)).toBe(9);
});

test("fixed tests", () => {
  expect(maxMultiple(7, 17)).toBe(14);
});

test("fixed tests", () => {
  expect(maxMultiple(10, 50)).toBe(50);
});

test("fixed tests", () => {
  expect(maxMultiple(37, 200)).toBe(185);
});

test("fixed tests", () => {
  expect(maxMultiple(7, 100)).toBe(98);
});
