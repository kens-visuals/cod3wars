const repeats = require("./index");

test("fixed tests", () => {
  expect(repeats([4, 5, 7, 5, 4, 8])).toBe(15);
});

test("fixed tests", () => {
  expect(repeats([9, 10, 19, 13, 19, 13])).toBe(19);
});

test("fixed tests", () => {
  expect(repeats([16, 0, 11, 4, 8, 16, 0, 11])).toBe(12);
});

test("fixed tests", () => {
  expect(repeats([5, 17, 18, 11, 13, 18, 11, 13])).toBe(22);
});

test("fixed tests", () => {
  expect(repeats([5, 10, 19, 13, 10, 13])).toBe(24);
});
