const multiplicationTable = require("./index");

test("fixed tests", () => {
  expect(multiplicationTable(3)).toEqual([
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
  ]);
});
