const uniqueInOrder = require("./index");

test("fixed tests", () => {
  expect(uniqueInOrder("AAAABBBCCDAABBB")).toEqual([
    "A",
    "B",
    "C",
    "D",
    "A",
    "B",
  ]);
});
