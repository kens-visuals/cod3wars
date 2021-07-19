const abbreviate = require("./index");

test("fixed tests", () => {
  expect(abbreviate("internationalization")).toBe("i18n");
});

test("fixed tests", () => {
  expect(abbreviate("accessibility")).toBe("a11y");
});

test("fixed tests", () => {
  expect(abbreviate("Accessibility")).toBe("A11y");
});

test("fixed tests", () => {
  expect(abbreviate("elephant-ride")).toBe("e6t-r2e");
});
