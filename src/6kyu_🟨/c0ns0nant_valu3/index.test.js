const solve = require("./index");

test("fixed tests", () => {
  expect(solve("zodiac")).toBe(26);
});

test("fixed tests", () => {
  expect(solve("chruschtschov")).toBe(80);
});

test("fixed tests", () => {
  expect(solve("khrushchev")).toBe(38);
});

test("fixed tests", () => {
  expect(solve("strength")).toBe(57);
});

test("fixed tests", () => {
  expect(solve("catchphrase")).toBe(73);
});

test("fixed tests", () => {
  expect(solve("twelfthstreet")).toBe(103);
});

test("fixed tests", () => {
  expect(solve("mischtschenkoana")).toBe(80);
});
