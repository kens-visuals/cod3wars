const number = require("./index");

test("fixed tests", () => {
  expect(number([])).toEqual([]);
});

test("fixed tests", () => {
  expect(number(["a", "b", "c"])).toEqual(["1: a", "2: b", "3: c"]);
});
