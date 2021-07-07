const anagrams = require("./index");

test("fixed tests", () => {
  expect(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])).toEqual([
    "aabb",
    "bbaa",
  ]);
});

test("fixed tests", () => {
  expect(
    anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])
  ).toEqual(["carer", "racer"]);
});

test("fixed tests", () => {
  expect(anagrams("laser", ["lazing", "lazy", "lacer"])).toEqual([]);
});
