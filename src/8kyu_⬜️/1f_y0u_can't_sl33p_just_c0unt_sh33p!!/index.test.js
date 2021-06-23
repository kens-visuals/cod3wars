const countSheep = require("./index");

test("fixed tests", () => {
  expect(countSheep(1)).toBe("1 sheep...");
});

test("fixed tests", () => {
  expect(countSheep(2)).toBe("1 sheep...2 sheep...");
});

test("fixed tests", () => {
  expect(countSheep(3)).toBe("1 sheep...2 sheep...3 sheep...");
});
