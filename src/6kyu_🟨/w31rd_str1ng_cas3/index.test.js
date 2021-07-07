const toWeirdCase = require("./index");

test("fixed tests", () => {
  expect(toWeirdCase("This")).toBe("ThIs");
});

test("fixed tests", () => {
  expect(toWeirdCase("is")).toBe("Is");
});

test("fixed tests", () => {
  expect(toWeirdCase("This is a test")).toBe("ThIs Is A TeSt");
});
