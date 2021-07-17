const decodeMorse = require("./index");

test("fixed tests", () => {
  expect(decodeMorse(".... . -.--   .--- ..- -.. .")).toBe("HEY JUDE");
});
