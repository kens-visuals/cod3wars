const litres = require("./index");

test("fixed tests", () => {
  expect(litres(2)).toBe(1, "should return 1 litre");
});

test("fixed tests", () => {
  expect(litres(1.4)).toBe(0, "should return 0 litres");
});

test("fixed tests", () => {
  expect(litres(12.3)).toBe(6, "should return 6 litres");
});

test("fixed tests", () => {
  expect(litres(0.82)).toBe(0, "should return 0 litres");
});

test("fixed tests", () => {
  expect(litres(11.8)).toBe(5, "should return 5 litres");
});

test("fixed tests", () => {
  expect(litres(1787)).toBe(893, "should return 893 litres");
});

test("fixed tests", () => {
  expect(litres(0)).toBe(0, "should return 0 litres");
});
