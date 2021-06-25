const solve = require("./index");

test("fixed tests", () => {
  expect(solve("code")).toBe("code");
});

test("fixed tests", () => {
  expect(solve("CODe")).toBe("CODE");
});

test("fixed tests", () => {
  expect(solve("COde")).toBe("code");
});

test("fixed tests", () => {
  expect(solve("Code")).toBe("code");
});
