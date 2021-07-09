const pigIt = require("./index");

test("fixed tests", () => {
  expect(pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
});

test("fixed tests", () => {
  expect(pigIt("This is my string")).toBe("hisTay siay ymay tringsay");
});
