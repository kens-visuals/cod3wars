const isSumOfCubes = require("./index");

test("fixed tests", () => {
  expect(isSumOfCubes("0 9026315 -827&()")).toBe("0 0 Lucky");
});

test("fixed tests", () => {
  expect(isSumOfCubes("9026315 -827&()")).toBe("Unlucky");
});
