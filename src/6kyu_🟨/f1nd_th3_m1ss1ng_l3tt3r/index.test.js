const findMissingLetter = require("./index");

test("fixed tests", () => {
  expect(findMissingLetter(["a", "b", "c", "d", "f"])).toBe("e");
});

test("fixed tests", () => {
  expect(findMissingLetter(["O", "Q", "R", "S"])).toBe("P");
});
