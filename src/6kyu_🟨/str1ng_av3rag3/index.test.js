const averageString = require("./index");

test("fixed tests", () => {
  expect(averageString("zero nine five two")).toBe("four");
});

test("fixed tests", () => {
  expect(averageString("four six two three")).toBe("three");
});

test("fixed tests", () => {
  expect(averageString("one two three four five")).toBe("three");
});

test("fixed tests", () => {
  expect(averageString("five four")).toBe("four");
});

test("fixed tests", () => {
  expect(averageString("zero zero zero zero zero")).toBe("zero");
});

test("fixed tests", () => {
  expect(averageString("one one eight one")).toBe("two");
});

test("fixed tests", () => {
  expect(averageString("")).toBe("n/a");
});
