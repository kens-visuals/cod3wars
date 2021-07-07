const getCount = require("./index");

test("fixed tests", () => {
  expect(getCount("abracadabra")).toBe(5);
});
