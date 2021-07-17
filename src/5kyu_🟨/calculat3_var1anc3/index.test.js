const variance = require("./index");

const numbers1 = [-10, 0, 10, 20, 30];
const numbers2 = [8, 9, 10, 11, 12];
const numbers3 = [1.5, 2.5, 4, 2, 1, 1];

test("fixed tests", () => {
  expect(variance(numbers1).toFixed(4)).toBe(
    "200.0000",
    "Variance for the first example set is not correct"
  );
});

test("fixed tests", () => {
  expect(variance(numbers2).toFixed(4)).toBe(
    "2.0000",
    "Variance for the second example set is not correct"
  );
});

test("fixed tests", () => {
  expect(variance(numbers3).toFixed(4)).toBe(
    "1.0833",
    "Variance for the third example set is not correct"
  );
});
