const sumIntervals = require("./index");

test("fixed tests", () => {
  expect(sumIntervals([[1, 5]])).toBe(4);
});

test("fixed tests", () => {
  expect(
    sumIntervals([
      [1, 5],
      [6, 10],
    ])
  ).toBe(8);
});

test("fixed tests", () => {
  expect(
    sumIntervals([
      [1, 5],
      [1, 5],
    ])
  ).toBe(4);
});

test("fixed tests", () => {
  expect(
    sumIntervals([
      [1, 4],
      [7, 10],
      [3, 5],
    ])
  ).toBe(7);
});
