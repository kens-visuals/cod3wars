const mygcd = require("./index");

test("fixed tests", () => {
  expect(mygcd(30, 12)).toBe(6);
});

test("fixed tests", () => {
  expect(mygcd(8, 9)).toBe(1);
});

test("fixed tests", () => {
  expect(mygcd(1, 1)).toBe(1);
});
