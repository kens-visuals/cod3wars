const titleCase = require("./index");

test("fixed tests", () => {
  expect(titleCase("")).toBe("");
});

test("fixed tests", () => {
  expect(titleCase("a clash of KINGS", "a an the of")).toBe("A Clash of Kings");
});

test("fixed tests", () => {
  expect(titleCase("THE WIND IN THE WILLOWS", "The In")).toBe(
    "The Wind in the Willows"
  );
});

test("fixed tests", () => {
  expect(titleCase("the quick brown fox")).toBe("The Quick Brown Fox");
});
