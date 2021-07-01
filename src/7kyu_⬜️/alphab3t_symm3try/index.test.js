const solve = require("./index");

test("fixed tests", () => {
  expect(solve(["abode", "ABc", "xyzD"])).toEqual([4, 3, 1]);
});

test("fixed tests", () => {
  expect(solve(["abide", "ABc", "xyz"])).toEqual([4, 3, 0]);
});

test("fixed tests", () => {
  expect(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"])).toEqual([
    6,
    5,
    7,
  ]);
});

test("fixed tests", () => {
  expect(solve(["encode", "abc", "xyzD", "ABmD"])).toEqual([1, 3, 1, 3]);
});
