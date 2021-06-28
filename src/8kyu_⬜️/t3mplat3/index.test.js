const even_or_odd = require("./index");

test("fixed tests", () => {
  expect(even_or_odd(2)).toBe("Even");
});

test("fixed tests", () => {
  expect(even_or_odd(0)).toBe("Even");
});

test("fixed tests", () => {
  expect(even_or_odd(7)).toBe("Odd");
});

test("fixed tests", () => {
  expect(even_or_odd(1)).toBe("Odd");
});
