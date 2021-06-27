const wordsToMarks = require("./index");

test("fixed tests", () => {
  expect(wordsToMarks("attitude")).toBe(100);
});

test("fixed tests", () => {
  expect(wordsToMarks("friends")).toBe(75);
});

test("fixed tests", () => {
  expect(wordsToMarks("family")).toBe(66);
});

test("fixed tests", () => {
  expect(wordsToMarks("selfness")).toBe(99);
});

test("fixed tests", () => {
  expect(wordsToMarks("knowledge")).toBe(96);
});
