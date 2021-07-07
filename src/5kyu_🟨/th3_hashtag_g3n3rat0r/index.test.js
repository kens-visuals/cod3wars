const generateHashtag = require("./index");

test("fixed tests", () => {
  expect(generateHashtag("")).toBe(
    false,
    "Expected an empty string to return false"
  );
});

test("fixed tests", () => {
  expect(generateHashtag(" ".repeat(200))).toBe(false, "Still an empty string");
});

test("fixed tests", () => {
  expect(generateHashtag("Do We have A Hashtag")).toBe(
    "#DoWeHaveAHashtag",
    "Expected a Hashtag (#) at the beginning."
  );
});

test("fixed tests", () => {
  expect(generateHashtag("Codewars")).toBe(
    "#Codewars",
    "Should handle a single word."
  );
});

test("fixed tests", () => {
  expect(generateHashtag("Codewars Is Nice")).toBe(
    "#CodewarsIsNice",
    "Should remove spaces."
  );
});

test("fixed tests", () => {
  expect(generateHashtag("Codewars is nice")).toBe(
    "#CodewarsIsNice",
    "Should capitalize first letters of words."
  );
});

test("fixed tests", () => {
  expect(generateHashtag("code" + " ".repeat(140) + "wars")).toBe("#CodeWars");
});

test("fixed tests", () => {
  expect(
    generateHashtag(
      "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
    )
  ).toBe(
    false,
    "Should return false if the final word is longer than 140 chars."
  );
});

test("fixed tests", () => {
  expect(generateHashtag("a".repeat(139))).toBe(
    "#A" + "a".repeat(138),
    "Should work"
  );
});

test("fixed tests", () => {
  expect(generateHashtag("a".repeat(140))).toBe(false, "Too long");
});
