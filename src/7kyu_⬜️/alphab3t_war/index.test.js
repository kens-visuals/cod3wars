const alphabetWar = require("./index");

test("fixed tests", () => {
  expect(alphabetWar("z")).toBe("Right side wins!");
});

test("fixed tests", () => {
  expect(alphabetWar("zdqmwpbs")).toBe("Let's fight again!");
});

test("fixed tests", () => {
  expect(alphabetWar("zzzzs")).toBe("Right side wins!");
});

test("fixed tests", () => {
  expect(alphabetWar("wwwwww")).toBe("Left side wins!");
});
