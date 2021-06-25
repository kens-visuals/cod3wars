const addBinary = require("./index");

test("fixed tests", () => {
  expect(addBinary(1, 2)).toBe("11");
});
