const isSortedAndHow = require("./index");

test("fixed tests", () => {
  expect(isSortedAndHow([1, 2])).toBe("yes, ascending");
});

test("fixed tests", () => {
  expect(isSortedAndHow([15, 7, 3, -8])).toBe("yes, descending");
});

test("fixed tests", () => {
  expect(isSortedAndHow([4, 2, 30])).toBe("no");
});
