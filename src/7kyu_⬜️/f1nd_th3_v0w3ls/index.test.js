const vowelIndices = require("./index");

test("fixed tests", () => {
  expect(vowelIndices("mmm")).toEqual([]);
});

test("fixed tests", () => {
  expect(vowelIndices("apple")).toEqual([1, 5]);
});

test("fixed tests", () => {
  expect(vowelIndices("super")).toEqual([2, 4]);
});

test("fixed tests", () => {
  expect(vowelIndices("orange")).toEqual([1, 3, 6]);
});

test("fixed tests", () => {
  expect(vowelIndices("supercalifragilisticexpialidocious")).toEqual([
    2,
    4,
    7,
    9,
    12,
    14,
    16,
    19,
    21,
    24,
    25,
    27,
    29,
    31,
    32,
    33,
  ]);
});
