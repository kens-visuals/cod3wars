const wave = require("./index");

test("fixed tests", () => {
  expect(wave("hello")).toEqual(["Hello", "hEllo", "heLlo", "helLo", "hellO"]);
});

test("fixed tests", () => {
  expect(wave("codewars")).toEqual([
    "Codewars",
    "cOdewars",
    "coDewars",
    "codEwars",
    "codeWars",
    "codewArs",
    "codewaRs",
    "codewarS",
  ]);
});

test("fixed tests", () => {
  expect(wave("")).toEqual([]);
});

test("fixed tests", () => {
  expect(wave("two words")).toEqual([
    "Two words",
    "tWo words",
    "twO words",
    "two Words",
    "two wOrds",
    "two woRds",
    "two worDs",
    "two wordS",
  ]);
});

test("fixed tests", () => {
  expect(wave(" gap ")).toEqual([" Gap ", " gAp ", " gaP "]);
});
