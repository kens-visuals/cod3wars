const lettersToNumbers = require("./index");

test("fixed tests", () => {
  expect(lettersToNumbers("I Love You")).toBe(170);
});

test("fixed tests", () => {
  expect(lettersToNumbers("ILoveYou")).toBe(170);
});

test("fixed tests", () => {
  expect(lettersToNumbers("ARE YOU HUNGRY?")).toBe(356);
});

test("fixed tests", () => {
  expect(lettersToNumbers("oops, i did it again!")).toBe(152);
});

test("fixed tests", () => {
  expect(lettersToNumbers("Give me 5!")).toBe(73);
});

test("fixed tests", () => {
  expect(lettersToNumbers("Give me five!")).toBe(110);
});
