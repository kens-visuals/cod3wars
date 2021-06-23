const saleHotdogs = require("./index");

test("fixed tests", () => {
  expect(saleHotdogs(1)).toBe(100);
});

test("fixed tests", () => {
  expect(saleHotdogs(4)).toBe(400);
});

test("fixed tests", () => {
  expect(saleHotdogs(5)).toBe(475);
});

test("fixed tests", () => {
  expect(saleHotdogs(9)).toBe(855);
});

test("fixed tests", () => {
  expect(saleHotdogs(10)).toBe(900);
});

test("fixed tests", () => {
  expect(saleHotdogs(100)).toBe(9000);
});
