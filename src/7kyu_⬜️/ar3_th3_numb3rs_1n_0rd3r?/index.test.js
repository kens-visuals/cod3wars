const inAscOrder = require("./index");

test("fixed tests", () => {
  expect(inAscOrder([1, 2, 4, 7, 19])).toBe(true);
});

test("fixed tests", () => {
  expect(inAscOrder([1, 2, 3, 4, 5])).toBe(true);
});

test("fixed tests", () => {
  expect(inAscOrder([1, 6, 10, 18, 2, 4, 20])).not.toBe(
    'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order'
  );
});

test("fixed tests", () => {
  expect(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])).not.toBe(
    'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order'
  );
});
