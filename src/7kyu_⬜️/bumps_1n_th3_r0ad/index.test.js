const bump = require("./index");

test("fixed tests", () => {
  expect(bump("n")).toBe("Woohoo!");
});

test("fixed tests", () => {
  expect(bump("_nnnnnnn_n__n______nn__nn_nnn")).toBe("Car Dead");
});

test("fixed tests", () => {
  expect(bump("______n___n_")).toBe("Woohoo!");
});
