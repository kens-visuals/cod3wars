const disariumNumber = require("./index");

test("fixed tests", () => {
  expect(disariumNumber(89)).toBe("Disarium !!");
});

test("fixed tests", () => {
  expect(disariumNumber(564)).toBe("Not !!");
});

test("fixed tests", () => {
  expect(disariumNumber(1024)).toBe("Not !!");
});

test("fixed tests", () => {
  expect(disariumNumber(135)).toBe("Disarium !!");
});

test("fixed tests", () => {
  expect(disariumNumber(136586)).toBe("Not !!");
});
