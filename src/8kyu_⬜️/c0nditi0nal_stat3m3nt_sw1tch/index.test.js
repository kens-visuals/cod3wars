const howManydays = require("./index");

test("fixed tests", () => {
  expect(howManydays(1)).toBe(31);
});

test("fixed tests", () => {
  expect(howManydays(2)).toBe(28);
});

test("fixed tests", () => {
  expect(howManydays(3)).toBe(31);
});

test("fixed tests", () => {
  expect(howManydays(4)).toBe(30);
});

test("fixed tests", () => {
  expect(howManydays(12)).toBe(31);
});
