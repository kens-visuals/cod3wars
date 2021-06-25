const palindromeChainLength = require("./index");

test("fixed tests", () => {
  expect(palindromeChainLength(1)).toBe(0);
});

test("fixed tests", () => {
  expect(palindromeChainLength(88)).toBe(0);
});

test("fixed tests", () => {
  expect(palindromeChainLength(87)).toBe(4);
});

test("fixed tests", () => {
  expect(palindromeChainLength(89)).toBe(24);
});

test("fixed tests", () => {
  expect(palindromeChainLength(10)).toBe(1);
});
