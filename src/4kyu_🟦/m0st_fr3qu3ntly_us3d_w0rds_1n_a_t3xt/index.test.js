const topThreeWords = require("./index");

test("fixed tests", () => {
  expect(topThreeWords("a a a  b  c c  d d d d  e e e e e")).toEqual([
    "e",
    "d",
    "a",
  ]);
});

test("fixed tests", () => {
  expect(topThreeWords("a a c b b")).toEqual(["a", "b", "c"]);
});

test("fixed tests", () => {
  expect(
    topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
  ).toEqual(["e", "ddd", "aa"]);
});

test("fixed tests", () => {
  expect(topThreeWords("  //wont won't won't ")).toEqual(["won't", "wont"]);
});

test("fixed tests", () => {
  expect(topThreeWords("  , e   .. ")).toEqual(["e"]);
});

test("fixed tests", () => {
  expect(topThreeWords("  ...  ")).toEqual([]);
});

test("fixed tests", () => {
  expect(topThreeWords("  '  ")).toEqual([]);
});
