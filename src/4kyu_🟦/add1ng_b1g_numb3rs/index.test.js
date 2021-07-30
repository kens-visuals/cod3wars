const add = require("./index");

test("fixed tests", () => {
  expect(add("1", "1")).toBe("2");
});

test("fixed tests", () => {
  expect(add("123", "456")).toBe("579");
});

test("fixed tests", () => {
  expect(add("888", "222")).toBe("1110");
});

test("fixed tests", () => {
  expect(add("1372", "69")).toBe("1441");
});

test("fixed tests", () => {
  expect(add("12", "456")).toBe("468");
});

test("fixed tests", () => {
  expect(add("101", "100")).toBe("201");
});

test("fixed tests", () => {
  expect(
    add("63829983432984289347293874", "90938498237058927340892374089")
  ).toBe("91002328220491911630239667963");
});
