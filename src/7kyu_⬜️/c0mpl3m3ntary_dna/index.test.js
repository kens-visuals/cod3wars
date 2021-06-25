const DNAStrand = require("./index");

test("fixed tests", () => {
  expect(DNAStrand("AAAA")).toBe("TTTT");
});

test("fixed tests", () => {
  expect(DNAStrand("ATTGC")).toBe("TAACG");
});

test("fixed tests", () => {
  expect(DNAStrand("GTAT")).toBe("CATA");
});
