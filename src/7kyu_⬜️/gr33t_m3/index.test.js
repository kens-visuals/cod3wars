const greet = require("./index");

test("fixed tests", () => {
  expect(greet("riley")).toBe("Hello Riley!");
});
