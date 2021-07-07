const mineLocation = require("./index");

test("fixed tests", () => {
  expect(
    mineLocation([
      [1, 0],
      [0, 0],
    ])
  ).toEqual([0, 0]);
});

test("fixed tests", () => {
  expect(
    mineLocation([
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])
  ).toEqual([0, 0]);
});

test("fixed tests", () => {
  expect(
    mineLocation([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ])
  ).toEqual([2, 2]);
});
