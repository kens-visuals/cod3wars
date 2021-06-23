const splitAndMerge = require("./index");

test("fixed tests", () => {
  expect(splitAndMerge("My name is John", " ")).toBe("M y n a m e i s J o h n");
});

test("fixed tests", () => {
  expect(splitAndMerge("My name is John", "-")).toBe("M-y n-a-m-e i-s J-o-h-n");
});

test("fixed tests", () => {
  expect(splitAndMerge("Hello World!", ".")).toBe("H.e.l.l.o W.o.r.l.d.!");
});

test("fixed tests", () => {
  expect(splitAndMerge("Hello World!", ",")).toBe("H,e,l,l,o W,o,r,l,d,!");
});
