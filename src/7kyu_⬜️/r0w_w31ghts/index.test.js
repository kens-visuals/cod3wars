const rowWeights = require("./index");

test("fixed tests", () => {
  expect(rowWeights([80])).toEqual([80, 0]);
});

test("fixed tests", () => {
  expect(rowWeights([100, 50])).toEqual([100, 50]);
});

test("fixed tests", () => {
  expect(rowWeights([50, 60, 70, 80])).toEqual([120, 140]);
});

test("fixed tests", () => {
  expect(rowWeights([13, 27, 49])).toEqual([62, 27]);
});

test("fixed tests", () => {
  expect(rowWeights([70, 58, 75, 34, 91])).toEqual([236, 92]);
});

test("fixed tests", () => {
  expect(rowWeights([29, 83, 67, 53, 19, 28, 96])).toEqual([211, 164]);
});

test("fixed tests", () => {
  expect(rowWeights([0])).toEqual([0, 0]);
});

test("fixed tests", () => {
  expect(rowWeights([100, 51, 50, 100])).toEqual([150, 151]);
});

test("fixed tests", () => {
  expect(rowWeights([39, 84, 74, 18, 59, 72, 35, 61])).toEqual([207, 235]);
});

test("fixed tests", () => {
  expect(rowWeights([0, 1, 0])).toEqual([0, 1]);
});
