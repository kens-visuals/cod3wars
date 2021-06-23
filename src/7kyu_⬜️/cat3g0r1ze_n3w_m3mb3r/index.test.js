const openOrSenior = require("./index");

test("fixed tests", () => {
  expect(
    openOrSenior([
      [45, 12],
      [55, 21],
      [19, -2],
      [104, 20],
    ])
  ).toEqual(["Open", "Senior", "Open", "Senior"]);
});
