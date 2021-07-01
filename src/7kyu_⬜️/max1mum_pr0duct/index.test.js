const adjacentElementsProduct = require("./index");

test("fixed tests", () => {
  expect(adjacentElementsProduct([5, 8])).toBe(40);
});

test("fixed tests", () => {
  expect(adjacentElementsProduct([1, 2, 3])).toBe(6);
});

test("fixed tests", () => {
  expect(adjacentElementsProduct([1, 5, 10, 9])).toBe(90);
});

test("fixed tests", () => {
  expect(adjacentElementsProduct([4, 12, 3, 1, 5])).toBe(48);
});

test("fixed tests", () => {
  expect(adjacentElementsProduct([5, 1, 2, 3, 1, 4])).toBe(6);
});

test("fixed tests", () => {
  expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toBe(21);
});

test("fixed tests", () => {
  expect(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])).toBe(50);
});

test("fixed tests", () => {
  expect(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23])).toBe(30);
});

test("fixed tests", () => {
  expect(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])).toBe(
    -14
  );
});

test("fixed tests", () => {
  expect(adjacentElementsProduct([5, 1, 2, 3, 1, 4])).toBe(6);
});

test("fixed tests", () => {
  expect(adjacentElementsProduct([1, 0, 1, 0, 1000])).toBe(0);
});

test("fixed tests", () => {
  expect(adjacentElementsProduct([1, 2, 3, 0])).toBe(6);
});
