const alphanumeric = require("./index");

test("fixed tests", () => {
  expect(alphanumeric("Mazinkaiser")).toBe(true);
});

test("fixed tests", () => {
  expect(alphanumeric("hello world_")).toBe(false);
});

test("fixed tests", () => {
  expect(alphanumeric("PassW0rd")).toBe(true);
});

test("fixed tests", () => {
  expect(alphanumeric("     ")).toBe(false);
});
