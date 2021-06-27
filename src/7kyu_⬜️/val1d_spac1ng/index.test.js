const validSpacing = require("./index");

test("fixed tests", () => {
  expect(validSpacing("Hello world")).toBe(true);
});

test("fixed tests", () => {
  expect(validSpacing(" Hello world")).toBe(false);
});

test("fixed tests", () => {
  expect(validSpacing("Hello  world ")).toBe(false);
});

test("fixed tests", () => {
  expect(validSpacing("Hello")).toBe(true);
});

test("fixed tests", () => {
  expect(validSpacing("Helloworld")).toBe(true);
});
