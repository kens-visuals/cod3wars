const arithmetic = require("./index");

test("fixed tests", () => {
  expect(arithmetic(1, 2, "add")).toBe(3);
});

test("fixed tests", () => {
  expect(arithmetic(8, 2, "subtract")).toBe(6);
});

test("fixed tests", () => {
  expect(arithmetic(5, 2, "multiply")).toBe(10);
});

test("fixed tests", () => {
  expect(arithmetic(8, 2, "divide")).toBe(4);
});
