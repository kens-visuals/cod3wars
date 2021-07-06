const high = require("./index");

test("fixed tests", () => {
  expect(high("man i need a taxi up to ubud")).toBe("taxi");
});

test("fixed tests", () => {
  expect(high("what time are we climbing up the volcano")).toBe("volcano");
});

test("fixed tests", () => {
  expect(high("take me to semynak")).toBe("semynak");
});

test("fixed tests", () => {
  expect(high("aa b")).toBe("aa");
});

test("fixed tests", () => {
  expect(high("b aa")).toBe("b");
});

test("fixed tests", () => {
  expect(high("bb d")).toBe("bb");
});

test("fixed tests", () => {
  expect(high("d bb")).toBe("d");
});

test("fixed tests", () => {
  expect(high("aaa b")).toBe("aaa");
});
