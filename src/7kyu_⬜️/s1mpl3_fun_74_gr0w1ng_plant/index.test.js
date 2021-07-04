const growingPlant = require("./index");

test("fixed tests", () => {
  expect(growingPlant(100, 10, 910)).toBe(10);
});

test("fixed tests", () => {
  expect(growingPlant(10, 9, 4)).toBe(1);
});
