const matrixMultiplication = require("./index");

test("fixed tests", () => {
  expect(
    matrixMultiplication(
      [
        [1, 2],
        [3, 2],
      ],
      [
        [3, 2],
        [1, 1],
      ]
    )
  ).toEqual([
    [5, 4],
    [11, 8],
  ]);
});
