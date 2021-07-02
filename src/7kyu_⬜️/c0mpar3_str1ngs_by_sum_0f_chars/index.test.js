const compare = require("./index");

test("fixed tests", () => {
  expect(compare("AD", "BC")).toBe(true);
});

test("fixed tests", () => {
  expect(compare("AD", "DD")).toBe(false);
});
