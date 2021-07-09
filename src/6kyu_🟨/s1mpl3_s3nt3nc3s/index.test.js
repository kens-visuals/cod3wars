const makeSentence = require("./index");

test("fixed tests", () => {
  expect(makeSentence(["hello", "world"])).toBe("hello world.");
});
