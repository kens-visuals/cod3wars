const validateUsr = require("./index");

test("fixed tests", () => {
  expect(validateUsr("asddsa")).toBe(true);
});

test("fixed tests", () => {
  expect(validateUsr("a")).toBe(false);
});

test("fixed tests", () => {
  expect(validateUsr("Hass")).toBe(false);
});

test("fixed tests", () => {
  expect(validateUsr("Hasd_12assssssasasasasasaasasasasas")).toBe(false);
});

test("fixed tests", () => {
  expect(validateUsr("")).toBe(false);
});

test("fixed tests", () => {
  expect(validateUsr("____")).toBe(true);
});

test("fixed tests", () => {
  expect(validateUsr("012")).toBe(false);
});

test("fixed tests", () => {
  expect(validateUsr("p1pp1")).toBe(true);
});

test("fixed tests", () => {
  expect(validateUsr("asd43 34")).toBe(false);
});

test("fixed tests", () => {
  expect(validateUsr("asd43_34")).toBe(true);
});
