const containAllRots = require("./index");

test("fixed tests", () => {
  expect(containAllRots("", [])).toBe(true);
});

test("fixed tests", () => {
  expect(containAllRots("", ["bsjq", "qbsj"])).toBe(true);
});

test("fixed tests", () => {
  expect(
    containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])
  ).toBe(true);
});

test("fixed tests", () => {
  expect(
    containAllRots("XjYABhR", [
      "TzYxlgfnhf",
      "yqVAuoLjMLy",
      "BhRXjYA",
      "YABhRXj",
      "hRXjYAB",
      "jYABhRX",
      "XjYABhR",
      "ABhRXjY",
    ])
  ).toBe(false);
});
