const strToHash = require("./index");

test("fixed tests", () => {
  expect(strToHash("a=1, b=2, c=3, d=4")).toEqual({ a: 1, b: 2, c: 3, d: 4 });
});

test("fixed tests", () => {
  expect(strToHash("")).toEqual({});
});
