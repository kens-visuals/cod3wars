const getMiddle = require("./index");

test("fixed tests", () => {
  expect(getMiddle("test")).toBe("es");
});

test("fixed tests", () => {
  expect(getMiddle("testing")).toBe("t");
});

test("fixed tests", () => {
  expect(getMiddle("middle")).toBe("dd");
});

test("fixed tests", () => {
  expect(getMiddle("A")).toBe("A");
});
