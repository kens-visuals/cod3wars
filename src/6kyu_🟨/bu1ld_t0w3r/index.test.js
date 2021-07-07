const towerBuilder = require("./index");

test("fixed tests", () => {
  expect(towerBuilder(1)).toEqual(["*"]);
});

test("fixed tests", () => {
  expect(towerBuilder(2)).toEqual([" * ", "***"]);
});

test("fixed tests", () => {
  expect(towerBuilder(3)).toEqual(["  *  ", " *** ", "*****"]);
});
