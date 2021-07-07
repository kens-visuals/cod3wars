const solution = require("./index");

test("fixed tests", () => {
  expect(solution("abcdef")).toEqual(["ab", "cd", "ef"]);
});

test("fixed tests", () => {
  expect(solution("abcdefg")).toEqual(["ab", "cd", "ef", "g_"]);
});

test("fixed tests", () => {
  expect(solution("")).toEqual([]);
});
