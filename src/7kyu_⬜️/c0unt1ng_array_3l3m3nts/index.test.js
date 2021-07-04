const count = require("./index");

test("fixed tests", () => {
  expect(count(["a", "a", "b", "b", "b"])).toEqual({ a: 2, b: 3 });
});
