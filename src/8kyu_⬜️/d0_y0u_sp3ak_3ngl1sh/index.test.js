const spEng = require("./index");

test("fixed tests", () => {
  expect(spEng("english")).toBe(true);
});

test("fixed tests", () => {
  expect(spEng("egnlish")).toBe(false);
});
