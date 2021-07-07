const rgb = require("./index");

test("fixed tests", () => {
  expect(rgb(0, 0, 0)).toBe("000000");
});

test("fixed tests", () => {
  expect(rgb(0, 0, -20)).toBe("000000");
});

test("fixed tests", () => {
  expect(rgb(300, 255, 255)).toBe("FFFFFF");
});

test("fixed tests", () => {
  expect(rgb(173, 255, 47)).toBe("ADFF2F");
});
