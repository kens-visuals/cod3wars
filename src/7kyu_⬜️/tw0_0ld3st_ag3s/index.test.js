const twoOldestAges = require("./index");

const results1 = twoOldestAges([1, 5, 87, 45, 8, 8]);
const results2 = twoOldestAges([6, 5, 83, 5, 3, 18]);

test("fixed tests", () => {
  expect(results1[0]).toBe(45);
});

test("fixed tests", () => {
  expect(results1[1]).toBe(87);
});

test("fixed tests", () => {
  expect(results2[0]).toBe(18);
});

test("fixed tests", () => {
  expect(results2[1]).toBe(83);
});
