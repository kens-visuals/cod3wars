const sqInRect = require("./index");

test("fixed tests", () => {
  expect(sqInRect(5, 5)).toEqual(null);
});

test("fixed tests", () => {
  expect(sqInRect(5, 3)).toEqual([3, 2, 1, 1]);
});

test("fixed tests", () => {
  expect(sqInRect(3, 5)).toEqual([3, 2, 1, 1]);
});

test("fixed tests", () => {
  expect(sqInRect(20, 14)).toEqual([14, 6, 6, 2, 2, 2]);
});
