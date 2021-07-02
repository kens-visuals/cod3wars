const solve = require("./index");

test("fixed tests", () => {
  expect(solve("codewars")).toBe("srawedoc");
});

test("fixed tests", () => {
  expect(solve("your code")).toBe("edoc ruoy");
});

test("fixed tests", () => {
  expect(solve("your code rocks")).toBe("skco redo cruoy");
});

test("fixed tests", () => {
  expect(solve("i love codewars")).toBe("s rawe docevoli");
});
