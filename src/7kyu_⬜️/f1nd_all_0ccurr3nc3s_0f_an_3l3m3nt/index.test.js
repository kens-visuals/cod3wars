const findAll = require("./index");

test("fixed tests", () => {
  expect(findAll([6, 9, 3, 4, 3, 82, 11], 3)).toEqual([2, 4]);
});

test("fixed tests", () => {
  expect(findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16)).toEqual([
    1,
    9,
  ]);
});

test("fixed tests", () => {
  expect(
    findAll(
      [
        20,
        20,
        10,
        13,
        15,
        2,
        7,
        2,
        20,
        3,
        18,
        2,
        3,
        2,
        16,
        10,
        9,
        9,
        7,
        5,
        15,
        5,
      ],
      20
    )
  ).toEqual([0, 1, 8]);
});
