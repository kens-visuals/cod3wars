const longestRepetition = require("./index");

test("fixed tests", () => {
  expect(longestRepetition("aaaabb")).toEqual(["a", 4]);
});

test("fixed tests", () => {
  expect(longestRepetition("bbbaaabaaaa")).toEqual(["a", 4]);
});

test("fixed tests", () => {
  expect(longestRepetition("cbdeuuu900")).toEqual(["u", 3]);
});

test("fixed tests", () => {
  expect(longestRepetition("abbbbb")).toEqual(["b", 5]);
});

test("fixed tests", () => {
  expect(longestRepetition("aabb")).toEqual(["a", 2]);
});

test("fixed tests", () => {
  expect(longestRepetition("")).toEqual(["", 0]);
});

test("fixed tests", () => {
  expect(longestRepetition("ba")).toEqual(["b", 1]);
});
