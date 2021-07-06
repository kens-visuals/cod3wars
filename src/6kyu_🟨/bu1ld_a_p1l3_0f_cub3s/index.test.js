const findNb = require("./index");

test("fixed tests", () => {
  expect(findNb(4183059834009)).toBe(2022);
});

test("fixed tests", () => {
  expect(findNb(24723578342962)).toBe(-1);
});

test("fixed tests", () => {
  expect(findNb(135440716410000)).toBe(4824);
});

test("fixed tests", () => {
  expect(findNb(40539911473216)).toBe(3568);
});
