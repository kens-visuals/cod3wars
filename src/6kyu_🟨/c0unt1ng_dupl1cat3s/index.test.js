const duplicateCount = require("./index");

test("fixed tests", () => {
  expect(duplicateCount("")).toBe(0);
});

test("fixed tests", () => {
  expect(duplicateCount("abcde")).toBe(0);
});

test("fixed tests", () => {
  expect(duplicateCount("aabbcde")).toBe(2);
});

test("fixed tests", () => {
  expect(duplicateCount("aabBcde")).toBe(2, "should ignore case");
});

test("fixed tests", () => {
  expect(duplicateCount("Indivisibility")).toBe(1);
});

test("fixed tests", () => {
  expect(duplicateCount("Indivisibilities")).toBe(
    2,
    "characters may not be adjacent"
  );
});
