const flatten = require("./index");

test("fixed tests", () => {
  expect(flatten(1, [2, 3], 4, 5, [6, [7]])).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test("fixed tests", () => {
  expect(flatten("a", ["b", 2], 3, null, [[4], ["c"]])).toEqual([
    "a",
    "b",
    2,
    3,
    null,
    4,
    "c",
  ]);
});
