const SeriesSum = require("./index");

test("fixed tests", () => {
  expect(SeriesSum(1)).toBe("1.00");
});

test("fixed tests", () => {
  expect(SeriesSum(2)).toBe("1.25");
});

test("fixed tests", () => {
  expect(SeriesSum(3)).toBe("1.39");
});

test("fixed tests", () => {
  expect(SeriesSum(4)).toBe("1.49");
});
