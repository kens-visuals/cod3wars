const noOdds = require("./index");

test("fixed tests", () => {
  expect(noOdds([0, 1])).toEqual([0]);
});

test("fixed tests", () => {
  expect(noOdds([0, 1, 2, 3])).toEqual([0, 2]);
});
