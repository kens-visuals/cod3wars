const strong = require("./index");

test("fixed tests", () => {
  expect(strong(1)).toBe("STRONG!!!!");
});

test("fixed tests", () => {
  expect(strong(2)).toBe("STRONG!!!!");
});

test("fixed tests", () => {
  expect(strong(145)).toBe("STRONG!!!!");
});

test("fixed tests", () => {
  expect(strong(7)).toBe("Not Strong !!");
});

test("fixed tests", () => {
  expect(strong(93)).toBe("Not Strong !!");
});

test("fixed tests", () => {
  expect(strong(185)).toBe("Not Strong !!");
});
