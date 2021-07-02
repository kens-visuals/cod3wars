const maxProduct = require("./index");

test("fixed tests", () => {
  expect(maxProduct([4, 3, 5], 2)).toBe(20);
});

test("fixed tests", () => {
  expect(maxProduct([10, 8, 7, 9], 3)).toBe(720);
});

test("fixed tests", () => {
  expect(maxProduct([8, 6, 4, 6], 3)).toBe(288);
});

test("fixed tests", () => {
  expect(maxProduct([10, 2, 3, 8, 1, 10, 4], 5)).toBe(9600);
});

test("fixed tests", () => {
  expect(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5)).toBe(
    247895375
  );
});

test("fixed tests", () => {
  expect(maxProduct([-4, -27, -15, -6, -1], 2)).toBe(4);
});

test("fixed tests", () => {
  expect(maxProduct([-17, -8, -102, -309], 2)).toBe(136);
});

test("fixed tests", () => {
  expect(maxProduct([10, 3, -27, -1], 3)).toBe(-30);
});

test("fixed tests", () => {
  expect(maxProduct([14, 29, -28, 39, -16, -48], 4)).toBe(-253344);
});

test("fixed tests", () => {
  expect(maxProduct([1], 1)).toBe(1);
});
