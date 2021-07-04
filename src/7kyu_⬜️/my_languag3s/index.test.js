const myLanguages = require("./index");

test("fixed tests", () => {
  expect(myLanguages({ Java: 10, Ruby: 80, Python: 65 })).toEqual([
    "Ruby",
    "Python",
  ]);
});

test("fixed tests", () => {
  expect(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 })).toEqual([
    "Dutch",
    "Greek",
    "Hindi",
  ]);
});

test("fixed tests", () => {
  expect(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 })).toEqual([]);
});
