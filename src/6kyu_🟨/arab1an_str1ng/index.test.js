const camelize = require("./index");

test("fixed tests", () => {
  expect(camelize("java script")).toBe("JavaScript");
});

test("fixed tests", () => {
  expect(camelize("cODE warS")).toBe("CodeWars");
});
