const isAnagram = require("./index");

test("fixed tests", () => {
  expect(isAnagram("foefet", "toffee")).toBe(true);
});

test("fixed tests", () => {
  expect(isAnagram("Buckethead", "DeathCubeK")).toBe(true);
});

test("fixed tests", () => {
  expect(isAnagram("Twoo", "WooT")).toBe(true);
});

test("fixed tests", () => {
  expect(isAnagram("dumble", "bumble")).toBe(false);
});

test("fixed tests", () => {
  expect(isAnagram("ound", "round")).toBe(false);
});

test("fixed tests", () => {
  expect(isAnagram("apple", "pale")).toBe(false);
});
