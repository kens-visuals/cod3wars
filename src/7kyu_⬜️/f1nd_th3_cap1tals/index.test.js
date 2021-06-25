const capitals = require("./index");

test("fixed tests", () => {
  expect(capitals("CodEWaRs")).toEqual([0, 3, 4, 6]);
});
