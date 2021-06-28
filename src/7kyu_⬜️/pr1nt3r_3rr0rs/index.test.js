const printerError = require("./index");

test("fixed tests", () => {
  expect(
    printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
  ).toBe("3/56");
});
