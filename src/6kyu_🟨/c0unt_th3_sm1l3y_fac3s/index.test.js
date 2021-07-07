const countSmileys = require("./index");

test("fixed tests", () => {
  expect(countSmileys([])).toBe(0);
});

test("fixed tests", () => {
  expect(countSmileys([":D", ":~)", ";~D", ":)"])).toBe(4);
});

test("fixed tests", () => {
  expect(countSmileys([":)", ":(", ":D", ":O", ":;"])).toBe(2);
});

test("fixed tests", () => {
  expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
});
