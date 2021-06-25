const number = require("./index");

test("fixed tests", () => {
  expect(
    number([
      [10, 0],
      [3, 5],
      [5, 8],
    ])
  ).toBe(5);
});

test("fixed tests", () => {
  expect(
    number([
      [3, 0],
      [9, 1],
      [4, 10],
      [12, 2],
      [6, 1],
      [7, 10],
    ])
  ).toBe(17);
});

test("fixed tests", () => {
  expect(
    number([
      [3, 0],
      [9, 1],
      [4, 8],
      [12, 2],
      [6, 1],
      [7, 8],
    ])
  ).toBe(21);
});
