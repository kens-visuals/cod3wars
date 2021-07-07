const songDecoder = require("./index");

test("fixed tests", () => {
  expect(songDecoder("AWUBBWUBC")).toBe(
    "A B C",
    "WUB should be replaced by 1 space"
  );
});

test("fixed tests", () => {
  expect(songDecoder("AWUBWUBWUBBWUBWUBWUBC")).toBe(
    "A B C",
    "multiples WUB should be replaced by only 1 space"
  );
});

test("fixed tests", () => {
  expect(songDecoder("WUBAWUBBWUBCWUB")).toBe(
    "A B C",
    "heading or trailing spaces should be removed"
  );
});
