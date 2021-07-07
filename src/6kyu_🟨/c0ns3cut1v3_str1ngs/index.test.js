const longestConsec = require("./index");

test("fixed tests", () => {
  expect(
    longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
  ).toBe("abigailtheta");
});

test("fixed tests", () => {
  expect(
    longestConsec(
      [
        "ejjjjmmtthh",
        "zxxuueeg",
        "aanlljrrrxx",
        "dqqqaaabbb",
        "oocccffuucccjjjkkkjyyyeehh",
      ],
      1
    )
  ).toBe("oocccffuucccjjjkkkjyyyeehh");
});

test("fixed tests", () => {
  expect(longestConsec([], 3)).toBe("");
});

test("fixed tests", () => {
  expect(
    longestConsec(
      [
        "itvayloxrp",
        "wkppqsztdkmvcuwvereiupccauycnjutlv",
        "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
      ],
      2
    )
  ).toBe(
    "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
  );
});

test("fixed tests", () => {
  expect(
    longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)
  ).toBe("wlwsasphmxxowiaxujylentrklctozmymu");
});

test("fixed tests", () => {
  expect(
    longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)
  ).toBe("");
});

test("fixed tests", () => {
  expect(
    longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)
  ).toBe("ixoyx3452zzzzzzzzzzzz");
});

test("fixed tests", () => {
  expect(
    longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)
  ).toBe("");
});

test("fixed tests", () => {
  expect(
    longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)
  ).toBe("");
});
