const wordValue = require("./index");

test("fixed tests", () => {
  expect(wordValue(["codewars", "abc", "xyz"])).toEqual([88, 12, 225]);
});

test("fixed tests", () => {
  expect(wordValue(["abc abc", "abc abc", "abc", "abc"])).toEqual([
    12,
    24,
    18,
    24,
  ]);
});
