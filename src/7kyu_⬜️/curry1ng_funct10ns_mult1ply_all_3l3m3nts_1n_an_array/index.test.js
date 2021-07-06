const multiplyAll = require("./index");

test("fixed tests", () => {
  expect(multiplyAll([1, 2, 3])(1)).toEqual([1, 2, 3]);
});

test("fixed tests", () => {
  expect(multiplyAll([1, 2, 3])(2)).toEqual([2, 4, 6]);
});

test("fixed tests", () => {
  expect(multiplyAll([1, 2, 3])(0)).toEqual([0, 0, 0]);
});

test("fixed tests", () => {
  expect(multiplyAll([])(10)).toEqual([], "should return an empty array");
});
