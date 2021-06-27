const minMax = require("./index");

test("fixed tests", () => {
  expect(minMax([1, 2, 3, 4, 5])).toEqual([1, 5]);
});
