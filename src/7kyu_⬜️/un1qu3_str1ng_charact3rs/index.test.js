const solve = require("./index");

test("fixed tests", () => {
  expect(solve("xyab", "xzca")).toBe("ybzc");
});

test("fixed tests", () => {
  expect(solve("xyabb", "xzca")).toBe("ybbzc");
});

test("fixed tests", () => {
  expect(solve("abcd", "xyz")).toBe("abcdxyz");
});

test("fixed tests", () => {
  expect(solve("xxx", "xzca")).toBe("zca");
});
