const triangle = require("./index");

test("fixed tests", () => {
  expect(triangle("GB")).toBe("R");
});

test("fixed tests", () => {
  expect(triangle("RRR")).toBe("R");
});

test("fixed tests", () => {
  expect(triangle("RGBG")).toBe("B");
});

test("fixed tests", () => {
  expect(triangle("RBRGBRB")).toBe("G");
});

test("fixed tests", () => {
  expect(triangle("RBRGBRBGGRRRBGBBBGG")).toBe("G");
});

test("fixed tests", () => {
  expect(triangle("B")).toBe("B");
});
