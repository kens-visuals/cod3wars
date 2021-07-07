const goodVsEvil = require("./index");

test("fixed tests", () => {
  expect(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1")).toBe(
    "Battle Result: Evil eradicates all trace of Good",
    "Evil should win"
  );
});

test("fixed tests", () => {
  expect(goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0")).toBe(
    "Battle Result: Good triumphs over Evil",
    "Good should win"
  );
});

test("fixed tests", () => {
  expect(goodVsEvil("1 0 0 0 0 0", "1 0 0 0 0 0 0")).toBe(
    "Battle Result: No victor on this battle field",
    "Should be a tie"
  );
});
