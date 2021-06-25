const validatePIN = require("./index");

test("fixed tests", () => {
  expect(validatePIN("1")).toBe(false);
});

test("fixed tests", () => {
  expect(validatePIN("12")).toBe(false);
});

test("fixed tests", () => {
  expect(validatePIN("123")).toBe(false);
});

test("fixed tests", () => {
  expect(validatePIN("12345")).toBe(false);
});

test("fixed tests", () => {
  expect(validatePIN("1234567")).toBe(false);
});

test("fixed tests", () => {
  expect(validatePIN("-1234")).toBe(false);
});

test("fixed tests", () => {
  expect(validatePIN("1.234")).toBe(false);
});

test("fixed tests", () => {
  expect(validatePIN("-1.234")).toBe(false);
});

test("fixed tests", () => {
  expect(validatePIN("00000000")).toBe(false);
});

test("fixed tests", () => {
  expect(validatePIN("a234")).toBe(false);
});

test("fixed tests", () => {
  expect(validatePIN(".234")).toBe(false);
});

test("fixed tests", () => {
  expect(validatePIN("1234")).toBe(true);
});

test("fixed tests", () => {
  expect(validatePIN("0000")).toBe(true);
});

test("fixed tests", () => {
  expect(validatePIN("1111")).toBe(true);
});

test("fixed tests", () => {
  expect(validatePIN("123456")).toBe(true);
});

test("fixed tests", () => {
  expect(validatePIN("098765")).toBe(true);
});

test("fixed tests", () => {
  expect(validatePIN("000000")).toBe(true);
});

test("fixed tests", () => {
  expect(validatePIN("123456")).toBe(true);
});

test("fixed tests", () => {
  expect(validatePIN("090909")).toBe(true);
});
