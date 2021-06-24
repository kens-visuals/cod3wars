const fiveLine = require("./index");

test("fixed tests", () => {
  expect(fiveLine("  a")).toBe("a\naa\naaa\naaaa\naaaaa");
});

test("fixed tests", () => {
  expect(fiveLine("\txy \n")).toBe("xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
});

test("fixed tests", () => {
  expect(fiveLine("           Ok               ")).toBe(
    "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk"
  );
});
