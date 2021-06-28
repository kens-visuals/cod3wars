const solution = require("./index");

test("fixed tests", () => {
  expect(solution("world")).toBe("dlrow");
});

test("fixed tests", () => {
  expect(solution("hello")).toBe("olleh");
});

test("fixed tests", () => {
  expect(solution("")).toBe("");
});

test("fixed tests", () => {
  expect(solution("h")).toBe("h");
});
