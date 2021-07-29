const autocomplete = require("./index");

test("fixed tests", () => {
  expect(autocomplete("ai", ["airplane", "airport", "apple", "ball"])).toEqual([
    "airplane",
    "airport",
  ]);
});
