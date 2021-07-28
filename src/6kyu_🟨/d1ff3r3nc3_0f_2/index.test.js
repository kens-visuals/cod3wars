const twosDifference = require("./index");

test("fixed tests", () => {
  expect(twosDifference([1, 2, 3, 4])).toEqual([
    [1, 3],
    [2, 4],
  ]);
});

test("fixed tests", () => {
  expect(twosDifference([1, 3, 4, 6])).toEqual([
    [1, 3],
    [4, 6],
  ]);
});
