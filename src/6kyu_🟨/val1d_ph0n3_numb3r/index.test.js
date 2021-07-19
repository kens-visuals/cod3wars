const validPhoneNumber = require("./index");

test("fixed tests", () => {
  expect(validPhoneNumber("(123) 456-7890")).toBe(true);
});
