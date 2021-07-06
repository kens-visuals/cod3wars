const duplicateEncode = require("./index");

test("fixed tests", () => {
  expect(duplicateEncode("din")).toBe("(((");
});

test("fixed tests", () => {
  expect(duplicateEncode("recede")).toBe("()()()");
});

test("fixed tests", () => {
  expect(duplicateEncode("Success")).toBe(")())())", "should ignore case");
});

test("fixed tests", () => {
  expect(duplicateEncode("(( @")).toBe("))((");
});
