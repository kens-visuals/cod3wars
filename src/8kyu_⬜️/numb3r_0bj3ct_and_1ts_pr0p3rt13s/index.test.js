const whatNumberIsIt = require("./index");

test("fixed tests", () => {
  expect(whatNumberIsIt(1 / 0)).toBe(
    "Input number is Number.POSITIVE_INFINITY"
  );
});

test("fixed tests", () => {
  expect(whatNumberIsIt(100)).toBe("Input number is 100");
});

test("fixed tests", () => {
  expect(whatNumberIsIt(1.7976931348623157e308)).toBe(
    "Input number is Number.MAX_VALUE"
  );
});

test("fixed tests", () => {
  expect(whatNumberIsIt(5e-324)).toBe("Input number is Number.MIN_VALUE");
});

test("fixed tests", () => {
  expect(whatNumberIsIt(-Number.MAX_VALUE * 2)).toBe(
    "Input number is Number.NEGATIVE_INFINITY"
  );
});

test("fixed tests", () => {
  expect(whatNumberIsIt(NaN)).toBe("Input number is Number.NaN");
});

test("fixed tests", () => {
  expect(whatNumberIsIt(Infinity + 1)).toBe(
    "Input number is Number.POSITIVE_INFINITY"
  );
});
