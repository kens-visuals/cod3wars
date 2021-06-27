const automorphic = require("./index");

test("fixed tests", () => {
  expect(automorphic(1)).toBe("Automorphic");
});

test("fixed tests", () => {
  expect(automorphic(3)).toBe("Not!!");
});

test("fixed tests", () => {
  expect(automorphic(6)).toBe("Automorphic");
});

test("fixed tests", () => {
  expect(automorphic(9)).toBe("Not!!");
});

test("fixed tests", () => {
  expect(automorphic(25)).toBe("Automorphic");
});

test("fixed tests", () => {
  expect(automorphic(53)).toBe("Not!!");
});

test("fixed tests", () => {
  expect(automorphic(76)).toBe("Automorphic");
});

test("fixed tests", () => {
  expect(automorphic(95)).toBe("Not!!");
});

test("fixed tests", () => {
  expect(automorphic(625)).toBe("Automorphic");
});

test("fixed tests", () => {
  expect(automorphic(225)).toBe("Not!!");
});
