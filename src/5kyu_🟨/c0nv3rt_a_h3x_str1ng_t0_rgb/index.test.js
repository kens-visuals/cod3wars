const hexStringToRGB = require("./index");

test("fixed tests", () => {
  expect(hexStringToRGB("#FF9933")).toEqual({ r: 255, g: 153, b: 51 });
});
