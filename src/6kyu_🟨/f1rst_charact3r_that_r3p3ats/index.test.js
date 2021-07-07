const firstDup = require("./index");

test("fixed tests", () => {
  expect(firstDup("tweet")).toBe("t");
});

test("fixed tests", () => {
  expect(firstDup("Ode to Joy")).toBe(" ");
});

test("fixed tests", () => {
  expect(firstDup("ode to joy")).toBe("o");
});

test("fixed tests", () => {
  expect(firstDup("bar")).toBe(undefined);
});

test("fixed tests", () => {
  expect(firstDup("123123")).toBe("1");
});

test("fixed tests", () => {
  expect(firstDup("!@#$!@#$")).toBe("!");
});
