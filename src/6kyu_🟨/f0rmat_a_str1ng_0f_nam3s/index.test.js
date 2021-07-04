const list = require("./index");

test("fixed tests", () => {
  expect(
    list([
      { name: "Bart" },
      { name: "Lisa" },
      { name: "Maggie" },
      { name: "Homer" },
      { name: "Marge" },
    ])
  ).toBe("Bart, Lisa, Maggie, Homer & Marge");
});

test("fixed tests", () => {
  expect(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])).toBe(
    "Bart, Lisa & Maggie"
  );
});

test("fixed tests", () => {
  expect(list([{ name: "Bart" }, { name: "Lisa" }])).toBe("Bart & Lisa");
});

test("fixed tests", () => {
  expect(list([{ name: "Bart" }])).toBe(
    "Bart",
    "Wrong output for a single name"
  );
});

test("fixed tests", () => {
  expect(list([])).toBe("", "Must work with no names");
});
