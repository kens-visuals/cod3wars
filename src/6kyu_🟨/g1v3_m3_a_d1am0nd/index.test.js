const diamond = require("./index");

test("fixed tests", () => {
  expect(diamond(1)).toBe("*\n");
});

test("fixed tests", () => {
  expect(diamond(3)).toBe(" *\n***\n *\n");
});

test("fixed tests", () => {
  expect(diamond(5)).toBe("  *\n ***\n*****\n ***\n  *\n");
});

test("fixed tests", () => {
  expect(diamond(2)).toBe(null);
});

test("fixed tests", () => {
  expect(diamond(-3)).toBe(null);
});

test("fixed tests", () => {
  expect(diamond(0)).toBe(null);
});
