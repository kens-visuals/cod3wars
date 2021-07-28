const prefill = require("./index");

test("fixed tests", () => {
  expect(prefill(3, 1)).toEqual([1, 1, 1]);
});

test("fixed tests", () => {
  expect(prefill(2, "abc")).toEqual(["abc", "abc"]);
});

test("fixed tests", () => {
  expect(prefill("1", 1)).toEqual([1]);
});

test("fixed tests", () => {
  expect(prefill(3, prefill(2, "2d"))).toEqual([
    ["2d", "2d"],
    ["2d", "2d"],
    ["2d", "2d"],
  ]);
});
