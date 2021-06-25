const longest = require("./index");

test("fixed tests", () => {
  expect(longest("aretheyhere", "yestheyarehere")).toBe("aehrsty");
});

test("fixed tests", () => {
  expect(longest("loopingisfunbutdangerous", "lessdangerousthancoding")).toBe(
    "abcdefghilnoprstu"
  );
});

test("fixed tests", () => {
  expect(longest("inmanylanguages", "theresapairoffunctions")).toBe(
    "acefghilmnoprstuy"
  );
});
