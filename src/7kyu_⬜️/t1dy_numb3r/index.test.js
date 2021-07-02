const tidyNumber = require("./index");

test("fixed tests", () => {
  expect(tidyNumber(12)).toBe(true);
});

test("fixed tests", () => {
  expect(tidyNumber(102)).toBe(false);
});

test("fixed tests", () => {
  expect(tidyNumber(9672)).toBe(false);
});

test("fixed tests", () => {
  expect(tidyNumber(2789)).toBe(true);
});

test("fixed tests", () => {
  expect(tidyNumber(2335)).toBe(true);
});
