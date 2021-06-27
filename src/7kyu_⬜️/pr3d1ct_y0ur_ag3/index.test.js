const predictAge = require("./index");

test("fixed tests", () => {
  expect(predictAge(65, 60, 75, 55, 60, 63, 64, 45)).toBe(86);
});
