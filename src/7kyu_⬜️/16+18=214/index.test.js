const add = require("./index");

test("fixed tests", () => {
  expect(add(2, 11)).toBe(13);
});

test("fixed tests", () => {
  expect(add(0, 1)).toBe(1);
});

test("fixed tests", () => {
  expect(add(0, 0)).toBe(0);
});

test("fixed tests", () => {
  expect(add(16, 18)).toBe(214);
});

test("fixed tests", () => {
  expect(add(26, 39)).toBe(515);
});

test("fixed tests", () => {
  expect(add(122, 81)).toBe(1103);
});

test("fixed tests", () => {
  expect(add(1222, 30277)).toBe(31499);
});

test("fixed tests", () => {
  expect(add(1236, 30977)).toBe(31111013);
});

test("fixed tests", () => {
  expect(add(38810, 1383)).toBe(391193);
});

test("fixed tests", () => {
  expect(add(49999, 49999)).toBe(818181818);
});
