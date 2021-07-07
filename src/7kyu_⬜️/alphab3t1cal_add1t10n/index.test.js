const addLetters = require("./index");

test("fixed tests", () => {
  expect(addLetters(["a", "b", "c"])).toBe("f");
});

test("fixed tests", () => {
  expect(addLetters(["z"])).toBe("z");
});

test("fixed tests", () => {
  expect(addLetters(["a", "b"])).toBe("c");
});

test("fixed tests", () => {
  expect(addLetters(["c"])).toBe("c");
});

test("fixed tests", () => {
  expect(addLetters(["z", "a"])).toBe("a");
});

test("fixed tests", () => {
  expect(addLetters(["y", "c", "b"])).toBe("d");
});

test("fixed tests", () => {
  expect(addLetters([""])).toBe("z");
});
