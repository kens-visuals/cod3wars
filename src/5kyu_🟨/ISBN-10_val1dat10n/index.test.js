const validISBN10 = require("./index");

test("fixed tests", () => {
  expect(validISBN10("1112223339")).toBe(true);
});

test("fixed tests", () => {
  expect(validISBN10("048665088X")).toBe(true);
});

test("fixed tests", () => {
  expect(validISBN10("1293000000")).toBe(true);
});

test("fixed tests", () => {
  expect(validISBN10("1234554321")).toBe(true);
});

test("fixed tests", () => {
  expect(validISBN10("1234512345")).toBe(false);
});

test("fixed tests", () => {
  expect(validISBN10("1293")).toBe(false);
});

test("fixed tests", () => {
  expect(validISBN10("X123456788")).toBe(false);
});

test("fixed tests", () => {
  expect(validISBN10("ABCDEFGHIJ")).toBe(false);
});

test("fixed tests", () => {
  expect(validISBN10("XXXXXXXXXX")).toBe(false);
});

test("fixed tests", () => {
  expect(validISBN10("048665088XZ")).toBe(false);
});
