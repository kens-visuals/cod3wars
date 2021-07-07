const bears = require("./index");

test("fixed tests", () => {
  expect(bears(7, "8j8mBliB8gimjB8B8jlB")).toEqual(["B8B8B8", false]);
});

test("fixed tests", () => {
  expect(bears(3, "88Bifk8hB8BB8BBBB888chl8BhBfd")).toEqual([
    "8BB8B8B88B",
    true,
  ]);
});

test("fixed tests", () => {
  expect(bears(8, "8")).toEqual(["", false]);
});
