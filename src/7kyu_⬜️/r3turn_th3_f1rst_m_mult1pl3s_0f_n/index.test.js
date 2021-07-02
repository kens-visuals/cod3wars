const multiples = require("./index");

test("fixed tests", () => {
  expect(multiples(3, 5)).toEqual([5, 10, 15]);
});
