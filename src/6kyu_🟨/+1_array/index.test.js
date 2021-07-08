const upArray = require("./index");

test("fixed tests", () => {
  expect(upArray([2, 3, 9])).toEqual([2, 4, 0]);
});

test("fixed tests", () => {
  expect(upArray([4, 3, 2, 5])).toEqual([4, 3, 2, 6]);
});

test("fixed tests", () => {
  expect(upArray([1, -9])).toEqual(null);
});
