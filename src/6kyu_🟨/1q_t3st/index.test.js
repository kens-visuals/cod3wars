const iqTest = require("./index");

test("fixed tests", () => {
  expect(iqTest("2 4 7 8 10")).toBe(3);
});

test("fixed tests", () => {
  expect(iqTest("1 2 2")).toBe(1);
});
