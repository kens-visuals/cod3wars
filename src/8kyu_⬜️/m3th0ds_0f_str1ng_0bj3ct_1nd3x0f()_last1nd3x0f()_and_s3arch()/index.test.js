const firstToLast = require("./index");

test("fixed tests", () => {
  expect(firstToLast("ababc", "a")).toBe(2);
});

test("fixed tests", () => {
  expect(firstToLast("ababc", "c")).toBe(0);
});

test("fixed tests", () => {
  expect(firstToLast("ababc", "d")).toBe(-1);
});
