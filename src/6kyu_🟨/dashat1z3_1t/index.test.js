const dashatize = require("./index");

test("fixed tests", () => {
  expect(dashatize(274)).toBe("2-7-4", "Should return 2-7-4");
});

test("fixed tests", () => {
  expect(dashatize(5311)).toBe("5-3-1-1", "Should return 5-3-1-1");
});

test("fixed tests", () => {
  expect(dashatize(86320)).toBe("86-3-20", "Should return 86-3-20");
});

test("fixed tests", () => {
  expect(dashatize(974302)).toBe("9-7-4-3-02", "Should return 9-7-4-3-02");
});

test("fixed tests", () => {
  expect(dashatize(NaN)).toBe("NaN", "Should return NaN");
});

test("fixed tests", () => {
  expect(dashatize(0)).toBe("0", "Should return 0");
});

test("fixed tests", () => {
  expect(dashatize(-1)).toBe("1", "Should return 1");
});

test("fixed tests", () => {
  expect(dashatize(-28369)).toBe("28-3-6-9", "Should return 28-3-6-9");
});
