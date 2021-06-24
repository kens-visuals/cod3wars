const joinStrings = require("./index");

test("fixed tests", () => {
  expect(joinStrings("string1", "string2")).toBe("string1 string2");
});

test("fixed tests", () => {
  expect(joinStrings("testing", "testing")).toBe("testing testing");
});

test("fixed tests", () => {
  expect(joinStrings(134, 234)).toBe("134 234");
});
