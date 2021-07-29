const sortTheInnerContent = require("./index");

test("fixed tests", () => {
  expect(
    sortTheInnerContent("sort the inner content in descending order")
  ).toBe("srot the inner ctonnet in dsnnieedcg oredr");
});

test("fixed tests", () => {
  expect(sortTheInnerContent("wait for me")).toBe("wiat for me");
});

test("fixed tests", () => {
  expect(sortTheInnerContent("this kata is easy")).toBe("tihs ktaa is esay");
});
