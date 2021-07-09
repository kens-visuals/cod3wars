const makeAWindow = require("./index");

test("fixed tests", () => {
  expect(makeAWindow(3)).toBe(
    "---------\n|...|...|\n|...|...|\n|...|...|\n|---+---|\n|...|...|\n|...|...|\n|...|...|\n---------"
  );
});
