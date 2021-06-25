const reverseWords = require("./index");

test("fixed tests", () => {
  expect(reverseWords("The quick brown fox jumps over the lazy dog.")).toBe(
    "ehT kciuq nworb xof spmuj revo eht yzal .god"
  );
});

test("fixed tests", () => {
  expect(reverseWords("apple")).toBe("elppa");
});

test("fixed tests", () => {
  expect(reverseWords("a b c d")).toBe("a b c d");
});

test("fixed tests", () => {
  expect(reverseWords("double  spaced  words")).toBe("elbuod  decaps  sdrow");
});
