const reverseLetter = require("./index");

test("fixed tests", () => {
  expect(reverseLetter("krishan")).toBe("nahsirk");
});

test("fixed tests", () => {
  expect(reverseLetter("ultr53o?n")).toBe("nortlu");
});

test("fixed tests", () => {
  expect(reverseLetter("ab23c")).toBe("cba");
});

test("fixed tests", () => {
  expect(reverseLetter("krish21an")).toBe("nahsirk");
});
