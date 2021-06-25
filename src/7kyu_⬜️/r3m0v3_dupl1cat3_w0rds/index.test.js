const removeDuplicateWords = require("./index");

test("fixed tests", () => {
  expect(
    removeDuplicateWords(
      "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
    )
  ).toBe("alpha beta gamma delta");
});
