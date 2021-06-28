const getDivisorsCnt = require("./index");

test("fixed tests", () => {
  expect(getDivisorsCnt(1)).toBe(1);
});

test("fixed tests", () => {
  expect(getDivisorsCnt(10)).toBe(4);
});

test("fixed tests", () => {
  expect(getDivisorsCnt(11)).toBe(2);
});

test("fixed tests", () => {
  expect(getDivisorsCnt(54)).toBe(8);
});
