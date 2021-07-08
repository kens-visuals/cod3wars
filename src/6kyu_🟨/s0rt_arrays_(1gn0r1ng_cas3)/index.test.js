const sortme = require("./index");

test("fixed tests", () => {
  expect(sortme(["Hello", "there", "I'm", "fine"])).toEqual([
    "fine",
    "Hello",
    "I'm",
    "there",
  ]);
});

test("fixed tests", () => {
  expect(sortme(["C", "d", "a", "B"])).toEqual(["a", "B", "C", "d"]);
});

test("fixed tests", () => {
  expect(sortme(["CodeWars"])).toEqual(["CodeWars"]);
});

test("fixed tests", () => {
  expect(sortme([])).toEqual([]);
});
