const likes = require("./index");

test("fixed tests", () => {
  expect(likes([])).toBe("no one likes this");
});

test("fixed tests", () => {
  expect(likes(["Peter"])).toBe("Peter likes this");
});

test("fixed tests", () => {
  expect(likes(["Jacob", "Alex"])).toBe("Jacob and Alex like this");
});

test("fixed tests", () => {
  expect(likes(["Max", "John", "Mark"])).toBe("Max, John and Mark like this");
});

test("fixed tests", () => {
  expect(likes(["Alex", "Jacob", "Mark", "Max"])).toBe(
    "Alex, Jacob and 2 others like this"
  );
});
