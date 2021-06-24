const descendingOrder = require("./index");

test("fixed tests", () => {
  expect(descendingOrder(0)).toBe(0);
});

test("fixed tests", () => {
  expect(descendingOrder(1)).toBe(1);
});

test("fixed tests", () => {
  expect(descendingOrder(111)).toBe(111);
});

test("fixed tests", () => {
  expect(descendingOrder(15)).toBe(51);
});

test("fixed tests", () => {
  expect(descendingOrder(1021)).toBe(2110);
});

test("fixed tests", () => {
  expect(descendingOrder(123456789)).toBe(987654321);
});
