const stringTransformer = require("./index");

test("fixed tests", () => {
  expect(stringTransformer("Example string")).toBe("STRING eXAMPLE");
});
