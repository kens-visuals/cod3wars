const solution = require("./index");

test("fixed tests", () => {
  expect(solution("camelCasing")).toBe("camel Casing", "Unexpected result");
});

test("fixed tests", () => {
  expect(solution("camelCasingTest")).toBe(
    "camel Casing Test",
    "Unexpected result"
  );
});
