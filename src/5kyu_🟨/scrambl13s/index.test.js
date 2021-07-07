const scramble = require("./index");

test("fixed tests", () => {
  expect(scramble("rkqodlw", "world")).toBe(true);
});

test("fixed tests", () => {
  expect(scramble("cedewaraaossoqqyt", "codewars")).toBe(true);
});

test("fixed tests", () => {
  expect(scramble("katas", "steak")).toBe(false);
});

test("fixed tests", () => {
  expect(scramble("scriptjava", "javascript")).toBe(true);
});

test("fixed tests", () => {
  expect(scramble("scriptingjava", "javascript")).toBe(true);
});

test("fixed tests", () => {
  expect(scramble("scriptsjava", "javascripts")).toBe(true);
});

test("fixed tests", () => {
  expect(scramble("jscripts", "javascript")).toBe(false);
});

test("fixed tests", () => {
  expect(scramble("aabbcamaomsccdd", "commas")).toBe(true);
});
