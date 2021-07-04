const f = require("./index");

test("fixed tests", () => {
  expect(f(100)).toBe(5050);
});

test("fixed tests", () => {
  expect(f(300)).toBe(45150);
});

test("fixed tests", () => {
  expect(f(50000)).toBe(1250025000);
});

test("fixed tests", () => {
  expect(f("n")).toBe(false, "n must be a number");
});

test("fixed tests", () => {
  expect(f()).toBe(false, "n must be a value");
});

test("fixed tests", () => {
  expect(f(3.14)).toBe(false, "n must be an integer");
});

test("fixed tests", () => {
  expect(f(0)).toBe(false, "a value of n greater than 0 is required");
});

test("fixed tests", () => {
  expect(f(-10)).toBe(false, "a positive value of n is required");
});
