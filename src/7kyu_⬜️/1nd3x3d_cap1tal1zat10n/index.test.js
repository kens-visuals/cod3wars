const capitalize = require("./index");

test("fixed tests", () => {
  expect(capitalize("abcdef", [1, 2, 5])).toBe("aBCdeF");
});

test("fixed tests", () => {
  expect(capitalize("abcdef", [1, 2, 5, 100])).toBe("aBCdeF");
});

test("fixed tests", () => {
  expect(capitalize("codewars", [1, 3, 5, 50])).toBe("cOdEwArs");
});

test("fixed tests", () => {
  expect(capitalize("abracadabra", [2, 6, 9, 10])).toBe("abRacaDabRA");
});

test("fixed tests", () => {
  expect(capitalize("codewarriors", [5])).toBe("codewArriors");
});

test("fixed tests", () => {
  expect(capitalize("indexinglessons", [0])).toBe("Indexinglessons");
});
