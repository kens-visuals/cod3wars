const expandedForm = require("./index");

test("fixed tests", () => {
  expect(expandedForm(12)).toBe("10 + 2");
});

test("fixed tests", () => {
  expect(expandedForm(42)).toBe("40 + 2");
});

test("fixed tests", () => {
  expect(expandedForm(70304)).toBe("70000 + 300 + 4");
});
