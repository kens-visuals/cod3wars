const rotate = require("./index");

const testOut = rotate("Hello");

test("fixed tests", () => {
  expect(testOut.includes("elloH")).toBe(true);
});
test("fixed tests", () => {
  expect(testOut.includes("lloHe")).toBe(true);
});

test("fixed tests", () => {
  expect(testOut.includes("loHel")).toBe(true);
});

test("fixed tests", () => {
  expect(testOut.includes("oHell")).toBe(true);
});

test("fixed tests", () => {
  expect(testOut.includes("Hello")).toBe(true);
});
