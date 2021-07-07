const firstNonRepeatingLetter = require("./index");

test("fixed tests", () => {
  expect(firstNonRepeatingLetter("a")).toBe("a");
});

test("fixed tests", () => {
  expect(firstNonRepeatingLetter("stress")).toBe("t");
});

test("fixed tests", () => {
  expect(firstNonRepeatingLetter("moonmen")).toBe("e");
});
