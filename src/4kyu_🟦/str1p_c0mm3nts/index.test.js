const solution = require("./index");

test("fixed tests", () => {
  expect(
    solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
  ).toBe("apples, pears\ngrapes\nbananas");
});
