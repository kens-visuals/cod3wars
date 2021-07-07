const count = require("./index");

test("fixed tests", () => {
  expect(count("aba")).toEqual({ a: 2, b: 1 });
});

test("fixed tests", () => {
  expect(count("")).toEqual({});
});
