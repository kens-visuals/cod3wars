const generateShape = require("./index");

test("fixed tests", () => {
  expect(generateShape(8)).toBe(
    "++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++"
  );
});
