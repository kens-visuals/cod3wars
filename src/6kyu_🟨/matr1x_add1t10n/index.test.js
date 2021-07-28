const matrixAddition = require("./index");

test("fixed tests", () => {
  expect(
    matrixAddition(
      [
        [1, 2],
        [1, 2],
      ],
      [
        [2, 3],
        [2, 3],
      ]
    )
  ).toEqual([
    [3, 5],
    [3, 5],
  ]);
});

test("fixed tests", () => {
  expect(matrixAddition([[1]], [[2]])).toEqual([[3]]);
});

test("fixed tests", () => {
  expect(
    matrixAddition(
      [
        [1, 2, 3],
        [3, 2, 1],
        [1, 1, 1],
      ],
      [
        [2, 2, 1],
        [3, 2, 3],
        [1, 1, 3],
      ]
    )
  ).toEqual([
    [3, 4, 4],
    [6, 4, 4],
    [2, 2, 4],
  ]);
});
