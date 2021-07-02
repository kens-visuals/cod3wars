const countRedBeads = require("./index");

test("fixed tests", () => {
  expect(countRedBeads(0)).toBe(0);
});

test("fixed tests", () => {
  expect(countRedBeads(1)).toBe(0);
});

test("fixed tests", () => {
  expect(countRedBeads(3)).toBe(4);
});

test("fixed tests", () => {
  expect(countRedBeads(5)).toBe(8);
});
