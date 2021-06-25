const isIsogram = require("./index");

test("fixed tests", () => {
  expect(isIsogram("Dermatoglyphics")).toBe(true);
});

test("fixed tests", () => {
  expect(isIsogram("isogram")).toBe(true);
});

test("fixed tests", () => {
  expect(isIsogram("aba")).toBe(false);
});

test("fixed tests", () => {
  expect(isIsogram("moOse")).toBe(false);
});

test("fixed tests", () => {
  expect(isIsogram("isIsogram")).toBe(false);
});

test("fixed tests", () => {
  expect(isIsogram("")).toBe(true);
});
