const padIt = require("./index");

test("fixed tests", () => {
  expect(padIt("a", 1)).toBe("*a");
});

test("fixed tests", () => {
  expect(padIt("a", 2)).toBe("*a*");
});

test("fixed tests", () => {
  expect(padIt("a", 3)).toBe("**a*");
});

test("fixed tests", () => {
  expect(padIt("a", 4)).toBe("**a**");
});

test("fixed tests", () => {
  expect(padIt("a", 5)).toBe("***a**");
});
