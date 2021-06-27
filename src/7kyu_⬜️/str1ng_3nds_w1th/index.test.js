const solution = require("./index");

test("fixed tests", () => {
  expect(solution("abcde", "cde")).toBe(true);
});

test("fixed tests", () => {
  expect(solution("abcde", "abc")).toBe(false);
});
