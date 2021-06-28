const century = require("./index");

test("fixed tests", () => {
  expect(century(1705)).toBe(18);
});

test("fixed tests", () => {
  expect(century(1900)).toBe(19);
});

test("fixed tests", () => {
  expect(century(1601)).toBe(17);
});

test("fixed tests", () => {
  expect(century(2000)).toBe(20);
});

test("fixed tests", () => {
  expect(century(89)).toBe(1);
});
