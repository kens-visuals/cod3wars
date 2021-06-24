const addLength = require("./index");

test("fixed tests", () => {
  expect(addLength("apple ban")).toEqual(["apple 5", "ban 3"]);
});

test("fixed tests", () => {
  expect(addLength("you will win")).toEqual(["you 3", "will 4", "win 3"]);
});
