const calculator = require("./index");

test("fixed tests", () => {
  expect(calculator(1, 2, "+")).toBe(3);
});

test("fixed tests", () => {
  expect(calculator(1, 2, "-")).toBe(-1);
});

test("fixed tests", () => {
  expect(calculator(3, 5, "*")).toBe(15);
});

test("fixed tests", () => {
  expect(calculator(6, 2, "/")).toBe(3);
});

test("fixed tests", () => {
  expect(calculator(6, 2, "$")).toBe("unknown value");
});

test("fixed tests", () => {
  expect(calculator(6, "h", "*")).toBe("unknown value");
});
