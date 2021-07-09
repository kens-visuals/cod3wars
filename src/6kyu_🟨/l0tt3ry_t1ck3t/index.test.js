const bingo = require("./index");

test("fixed tests", () => {
  expect(
    bingo(
      [
        ["ABC", 65],
        ["HGR", 74],
        ["BYHT", 74],
      ],
      2
    )
  ).toBe("Loser!");
});

test("fixed tests", () => {
  expect(
    bingo(
      [
        ["ABC", 65],
        ["HGR", 74],
        ["BYHT", 74],
      ],
      1
    )
  ).toBe("Winner!");
});

test("fixed tests", () => {
  expect(
    bingo(
      [
        ["HGTYRE", 74],
        ["BE", 66],
        ["JKTY", 74],
      ],
      3
    )
  ).toBe("Loser!");
});
