const getLength = require("./index");
const getFirst = require("./index");
const getLast = require("./index");
const pushElement = require("./index");
const popElement = require("./index");

test("fixed tests", () => {
  expect(getLength([1, 2, 3])).toBe(3);
});

test("fixed tests", () => {
  expect(getFirst([1, 2, 3])).toBe(1);
});

test("fixed tests", () => {
  expect(getLast([1, 2, 3])).toBe(3);
});

test("fixed tests", () => {
  expect(pushElement([1, 2, 3]).length).toBe(4);
});

test("fixed tests", () => {
  expect(popElement([1, 2, 3])).toBe(2);
});
