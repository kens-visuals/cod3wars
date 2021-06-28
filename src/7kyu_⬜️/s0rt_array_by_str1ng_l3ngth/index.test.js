const sortByLength = require("./index");

test("fixed tests", () => {
  expect(sortByLength(["Beg", "Life", "I", "To"])).toEqual([
    "I",
    "To",
    "Beg",
    "Life",
  ]);
});

test("fixed tests", () => {
  expect(sortByLength(["", "Moderately", "Brains", "Pizza"])).toEqual([
    "",
    "Pizza",
    "Brains",
    "Moderately",
  ]);
});

test("fixed tests", () => {
  expect(sortByLength(["Longer", "Longest", "Short"])).toEqual([
    "Short",
    "Longer",
    "Longest",
  ]);
});
