const openOrSenior = require("./index");

test("fixed tests", () => {
  expect(
    openOrSenior([
      [45, 12],
      [55, 21],
      [19, -2],
      [104, 20],
    ])
  ).toBe(["Open", "Senior", "Open", "Senior"]);
});

test("fixed tests", () => {
  expect(
    openOrSenior([
      [3, 12],
      [55, 1],
      [91, -2],
      [54, 23],
    ])
  ).toBe(["Open", "Open", "Open", "Open"]);
});

test("fixed tests", () => {
  expect(
    openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]] [54, 23],
    ])
  ).toBe(['Senior', 'Open', 'Open', 'Open']);
});
