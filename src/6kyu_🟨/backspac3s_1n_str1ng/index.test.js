const cleanString = require("./index");

test("fixed tests", () => {
  expect(cleanString("abc#d##c")).toBe("ac");
});

test("fixed tests", () => {
  expect(cleanString("abc####d##c#")).toBe("");
});
