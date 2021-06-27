const cubeOdd = require("./index");

test("fixed tests", () => {
  expect(cubeOdd([1, 2, 3, 4])).toBe(28);
});

test("fixed tests", () => {
  expect(cubeOdd([-3, -2, 2, 3])).toBe(0);
});

test("fixed tests", () => {
  expect(cubeOdd(["a", 12, 9, "z", 42])).toBe(undefined);
});
