const cutIt = require("./index");

test("fixed tests", () => {
  expect(cutIt(["ab", "cde", "fgh"])).toEqual(["ab", "cd", "fg"]);
});

test("fixed tests", () => {
  expect(cutIt(["abc", "defgh", "ijklmn"])).toEqual(["abc", "def", "ijk"]);
});

test("fixed tests", () => {
  expect(cutIt(["codewars", "javascript", "java"])).toEqual([
    "code",
    "java",
    "java",
  ]);
});
