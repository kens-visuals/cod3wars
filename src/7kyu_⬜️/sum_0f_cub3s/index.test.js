const sumCubes = require("./index");

test("fixed tests", () => {
  expect(sumCubes(1)).toBe(1);
});

test("fixed tests", () => {
  expect(sumCubes(2)).toBe(9);
});

test("fixed tests", () => {
  expect(sumCubes(3)).toBe(36);
});

test("fixed tests", () => {
  expect(sumCubes(4)).toBe(100);
});

test("fixed tests", () => {
  expect(sumCubes(10)).toBe(3025);
});

test("fixed tests", () => {
  expect(sumCubes(123)).toBe(58155876);
});
