const pattern = require("./index");

test("fixed tests", () => {
  expect(pattern(1)).toBe("1");
});

test("fixed tests", () => {
  expect(pattern(2)).toBe("1\n22");
});

test("fixed tests", () => {
  expect(pattern(5)).toBe("1\n22\n333\n4444\n55555");
});
