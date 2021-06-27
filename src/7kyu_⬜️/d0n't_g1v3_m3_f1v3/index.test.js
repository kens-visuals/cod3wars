const dontGiveMeFive = require("./index");

test("fixed tests", () => {
  expect(dontGiveMeFive(1, 9)).toBe(8);
});

test("fixed tests", () => {
  expect(dontGiveMeFive(4, 17)).toBe(12);
});
