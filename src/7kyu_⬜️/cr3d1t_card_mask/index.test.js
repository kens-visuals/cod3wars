const maskify = require("./index");

test("fixed tests", () => {
  expect(maskify("4556364607935616")).toBe("############5616");
});

test("fixed tests", () => {
  expect(maskify("1")).toBe("1");
});

test("fixed tests", () => {
  expect(maskify("11111")).toBe("#1111");
});
