const findShort = require("./index");

test("fixed tests", () => {
  expect(findShort("bitcoin take over the world maybe who knows perhaps")).toBe(
    3
  );
});

test("fixed tests", () => {
  expect(
    findShort(
      "turns out random test cases are easier than writing out basic ones"
    )
  ).toBe(3);
});

test("fixed tests", () => {
  expect(findShort("Let's travel abroad shall we")).toBe(2);
});
