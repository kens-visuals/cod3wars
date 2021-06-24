const numberToPower = require("./index");

test("fixed tests", () => {
  expect(numberToPower(4, 2)).toBe(16);
});

test("fixed tests", () => {
  expect(numberToPower(10, 4)).toBe(10000);
});

test("fixed tests", () => {
  expect(numberToPower(10, 0)).toBe(1);
});
