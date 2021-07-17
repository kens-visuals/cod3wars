const rot13 = require("./index");

test("fixed tests", () => {
  expect(rot13("grfg")).toBe("test");
});

test("fixed tests", () => {
  expect(rot13("Grfg")).toBe("Test");
});
