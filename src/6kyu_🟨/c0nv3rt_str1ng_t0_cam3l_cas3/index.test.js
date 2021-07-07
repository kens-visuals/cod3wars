const toCamelCase = require("./index");

test("fixed tests", () => {
  expect(toCamelCase("")).toBe(
    "",
    "An empty string was provided but not returned"
  );
});

test("fixed tests", () => {
  expect(toCamelCase("the_stealth_warrior")).toBe(
    "theStealthWarrior",
    "toCamelCase('the_stealth_warrior') did not return correct value"
  );
});

test("fixed tests", () => {
  expect(toCamelCase("The-Stealth-Warrior")).toBe(
    "TheStealthWarrior",
    "toCamelCase('The-Stealth-Warrior') did not return correct value"
  );
});

test("fixed tests", () => {
  expect(toCamelCase("A-B-C")).toBe(
    "ABC",
    "toCamelCase('A-B-C') did not return correct value"
  );
});
