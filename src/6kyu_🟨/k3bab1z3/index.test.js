const kebabize = require("./index");

test("fixed tests", () => {
  expect(kebabize("myCamelCasedString")).toBe("my-camel-cased-string");
});

test("fixed tests", () => {
  expect(kebabize("myCamelHas3Humps")).toBe("my-camel-has-humps");
});
