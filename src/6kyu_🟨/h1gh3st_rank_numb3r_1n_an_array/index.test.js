const highestRank = require("./index");

test("fixed tests", () => {
  expect(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])).toBe(12);
});
