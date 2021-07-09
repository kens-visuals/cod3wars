const isAValidMessage = require("./index");

test("fixed tests", () => {
  expect(isAValidMessage("3hey5hello2hi")).toBe(true);
});

test("fixed tests", () => {
  expect(isAValidMessage("4code13hellocodewars")).toBe(true);
});

test("fixed tests", () => {
  expect(isAValidMessage("3hey5hello2hi5")).toBe(false);
});

test("fixed tests", () => {
  expect(isAValidMessage("code4hello5")).toBe(false);
});

test("fixed tests", () => {
  expect(isAValidMessage("1a2bb3ccc4dddd5eeeee")).toBe(true);
});

test("fixed tests", () => {
  expect(isAValidMessage("")).toBe(true);
});
