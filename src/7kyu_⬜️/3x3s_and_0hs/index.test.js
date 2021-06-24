const XO = require("./index");

test("fixed tests", () => {
  expect(XO("xo")).toBe(true);
});

test("fixed tests", () => {
  expect(XO("xxOo")).toBe(true);
});

test("fixed tests", () => {
  expect(XO("xxxm")).toBe(false);
});

test("fixed tests", () => {
  expect(XO("Oo")).toBe(false);
});

test("fixed tests", () => {
  expect(XO("ooom")).toBe(false);
});
