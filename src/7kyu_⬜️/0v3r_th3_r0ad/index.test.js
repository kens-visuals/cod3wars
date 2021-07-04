const overTheRoad = require("./index");

test("fixed tests", () => {
  expect(overTheRoad(1, 3)).toBe(6);
});

test("fixed tests", () => {
  expect(overTheRoad(3, 3)).toBe(4);
});

test("fixed tests", () => {
  expect(overTheRoad(2, 3)).toBe(5);
});

test("fixed tests", () => {
  expect(overTheRoad(3, 5)).toBe(8);
});

test("fixed tests", () => {
  expect(overTheRoad(7, 11)).toBe(16);
});

test("fixed tests", () => {
  expect(overTheRoad(23633656673, 310027696726)).toBe(596421736780);
});
