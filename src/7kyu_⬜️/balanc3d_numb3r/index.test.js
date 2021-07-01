const balancedNum = require("./index");

test("fixed tests", () => {
  expect(balancedNum(7)).toBe("Balanced");
});

test("fixed tests", () => {
  expect(balancedNum(959)).toBe("Balanced");
});

test("fixed tests", () => {
  expect(balancedNum(13)).toBe("Balanced");
});

test("fixed tests", () => {
  expect(balancedNum(432)).toBe("Not Balanced");
});

test("fixed tests", () => {
  expect(balancedNum(424)).toBe("Balanced");
});
