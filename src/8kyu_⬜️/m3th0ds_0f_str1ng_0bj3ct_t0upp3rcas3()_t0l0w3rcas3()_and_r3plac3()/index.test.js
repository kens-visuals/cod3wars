const alienLanguage = require("./index");

test("fixed tests", () => {
  expect(alienLanguage("My name is John")).toBe("My NAMe Is JOHn");
});

test("fixed tests", () => {
  expect(alienLanguage("this is an example")).toBe("THIs Is An EXAMPLe");
});

test("fixed tests", () => {
  expect(alienLanguage("Hello World")).toBe("HELLo WORLd");
});

test("fixed tests", () => {
  expect(alienLanguage("HELLO WORLD")).toBe("HELLo WORLd");
});
