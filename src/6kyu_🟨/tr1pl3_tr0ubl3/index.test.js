const tripledouble = require("./index");

test("fixed tests", () => {
  expect(tripledouble(451999277, 41177722899)).toBe(1);
});

test("fixed tests", () => {
  expect(tripledouble(1222345, 12345)).toBe(0);
});

test("fixed tests", () => {
  expect(tripledouble(12345, 12345)).toBe(0);
});

test("fixed tests", () => {
  expect(tripledouble(666789, 12345667)).toBe(1);
});

test("fixed tests", () => {
  expect(tripledouble(10560002, 100)).toBe(1);
});

test("fixed tests", () => {
  expect(tripledouble(1112, 122)).toBe(0);
});
