const nbDig = require("./index");

test("fixed tests", () => {
  expect(nbDig(5750, 0)).toBe(4700);
});

test("fixed tests", () => {
  expect(nbDig(11011, 2)).toBe(9481);
});

test("fixed tests", () => {
  expect(nbDig(12224, 8)).toBe(7733);
});

test("fixed tests", () => {
  expect(nbDig(11549, 1)).toBe(11905);
});
