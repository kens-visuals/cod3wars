const trueOrFalse = require("./index");

const a = 1,
  b = 2,
  c = 1;

test("fixed tests", () => {
  expect(trueOrFalse(a > b)).toBe("false");
});

test("fixed tests", () => {
  expect(trueOrFalse(a === b)).toBe("false");
});

test("fixed tests", () => {
  expect(trueOrFalse(a < b)).toBe("true");
});

test("fixed tests", () => {
  expect(trueOrFalse(a !== b)).toBe("true");
});
test("fixed tests", () => {
  expect(trueOrFalse(b > c)).toBe("true");
});

test("fixed tests", () => {
  expect(trueOrFalse(b === c)).toBe("false");
});

test("fixed tests", () => {
  expect(trueOrFalse(b < c)).toBe("false");
});

test("fixed tests", () => {
  expect(trueOrFalse(b !== c)).toBe("true");
});

test("fixed tests", () => {
  expect(trueOrFalse(a === c)).toBe("true");
});

test("fixed tests", () => {
  expect(trueOrFalse(a !== c)).toBe("false");
});
