const lowercaseCount = require("./index");

test("fixed tests", () => {
  expect(lowercaseCount("abc")).toBe(3);
});

test("fixed tests", () => {
  expect(lowercaseCount("abcABC123")).toBe(3);
});

test("fixed tests", () => {
  expect(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")).toBe(3);
});

test("fixed tests", () => {
  expect(lowercaseCount("")).toBe(0);
});

test("fixed tests", () => {
  expect(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")).toBe(0);
});

test("fixed tests", () => {
  expect(lowercaseCount("abcdefghijklmnopqrstuvwxyz")).toBe(26);
});
