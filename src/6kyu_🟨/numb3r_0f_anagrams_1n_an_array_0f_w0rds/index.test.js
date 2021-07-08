const anagramCounter = require("./index");

test("fixed tests", () => {
  expect(typeof anagramCounter([])).toBe("number", "Is not returning a number");
});

test("fixed tests", () => {
  expect(anagramCounter(["dell", "ledl", "abc", "cba"])).toBe(
    2,
    "This should be 2"
  );
});

test("fixed tests", () => {
  expect(anagramCounter(["dell", "ledl", "lled", "cba"])).toBe(
    3,
    "This should be 3"
  );
});

test("fixed tests", () => {
  expect(
    anagramCounter(["dell", "ledl", "abc", "cba", "bca", "bac", "cab"])
  ).toBe(11, "This should be 11");
});
