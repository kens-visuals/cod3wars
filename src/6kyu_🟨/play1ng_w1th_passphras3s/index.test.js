const playPass = require("./index");

test("fixed tests", () => {
  expect(playPass("I LOVE YOU!!!", 1)).toBe("!!!vPz fWpM J");
});

test("fixed tests", () => {
  expect(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)).toBe(
    "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"
  );
});
