const isPangram = require("./index");

test("fixed tests", () => {
  expect(isPangram("The quick brown fox jumps over the lazy dog.")).toBe(true);
});

test("fixed tests", () => {
  expect(isPangram("This is not a pangram.")).toBe(false);
});
