const findNextSquare = require("./index");

test("fixed tests", () => {
  expect(findNextSquare(121)).toBe(144);
});

test("fixed tests", () => {
  expect(findNextSquare(625)).toBe(676);
});

test("fixed tests", () => {
  expect(findNextSquare(319225)).toBe(320356);
});

test("fixed tests", () => {
  expect(findNextSquare(15241383936)).toBe(15241630849);
});

test("fixed tests", () => {
  expect(findNextSquare(155)).toBe(-1);
});

test("fixed tests", () => {
  expect(findNextSquare(342786627)).toBe(-1);
});
