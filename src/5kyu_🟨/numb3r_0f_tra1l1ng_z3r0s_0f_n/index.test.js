const zeros = require("./index");

test("fixed tests", () => {
  expect(zeros(0)).toBe(0, "Testing with n = 0");
});

test("fixed tests", () => {
  expect(zeros(5)).toBe(1, "Testing with n = 5");
});

test("fixed tests", () => {
  expect(zeros(6)).toBe(1, "Testing with n = 6");
});

test("fixed tests", () => {
  expect(zeros(30)).toBe(7, "Testing with n = 30");
});
