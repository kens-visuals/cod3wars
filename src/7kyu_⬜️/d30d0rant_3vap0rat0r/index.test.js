const evaporator = require("./index");

test("fixed tests", () => {
  expect(evaporator(10, 10, 10)).toBe(22);
});
