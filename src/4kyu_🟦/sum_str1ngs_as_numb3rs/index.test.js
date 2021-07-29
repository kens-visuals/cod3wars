const sumStrings = require("./index");

test("fixed tests", () => {
  expect(sumStrings("123", "456")).toBe("579");
});
