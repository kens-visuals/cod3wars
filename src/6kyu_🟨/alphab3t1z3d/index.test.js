const alphabetized = require("./index");

test("fixed tests", () => {
  expect(alphabetized("The Holy Bible")).toBe("BbeehHilloTy");
});
