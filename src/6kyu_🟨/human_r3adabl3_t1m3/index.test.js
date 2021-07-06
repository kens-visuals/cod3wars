const humanReadable = require("./index");

test("fixed tests", () => {
  expect(humanReadable(0)).toBe("00:00:00", "humanReadable(0)");
});

test("fixed tests", () => {
  expect(humanReadable(5)).toBe("00:00:05", "humanReadable(5)");
});

test("fixed tests", () => {
  expect(humanReadable(60)).toBe("00:01:00", "humanReadable(60)");
});

test("fixed tests", () => {
  expect(humanReadable(86399)).toBe("23:59:59", "humanReadable(86399)");
});

test("fixed tests", () => {
  expect(humanReadable(359999)).toBe("99:59:59", "humanReadable(359999)");
});
