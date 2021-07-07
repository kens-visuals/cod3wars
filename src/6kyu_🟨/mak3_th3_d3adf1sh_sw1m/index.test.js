const parse = require("./index");

test("fixed tests", () => {
  expect(parse("iiisdoso")).toEqual([8, 64]);
});

test("fixed tests", () => {
  expect(parse("iiisxxxdoso")).toEqual([8, 64]);
});
