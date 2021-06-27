const SequenceSum = require("./index");

test("fixed tests", () => {
  expect(SequenceSum.showSequence(6)).toBe("0+1+2+3+4+5+6 = 21");
});
