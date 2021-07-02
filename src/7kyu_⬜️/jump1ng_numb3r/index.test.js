const jumpingNumber = require("./index");

test("fixed tests", () => {
  expect(jumpingNumber(1)).toBe("Jumping!!");
});

test("fixed tests", () => {
  expect(jumpingNumber(7)).toBe("Jumping!!");
});

test("fixed tests", () => {
  expect(jumpingNumber(9)).toBe("Jumping!!");
});

test("fixed tests", () => {
  expect(jumpingNumber(23)).toBe("Jumping!!");
});

test("fixed tests", () => {
  expect(jumpingNumber(32)).toBe("Jumping!!");
});

test("fixed tests", () => {
  expect(jumpingNumber(79)).toBe("Not!!");
});

test("fixed tests", () => {
  expect(jumpingNumber(98)).toBe("Jumping!!");
});

test("fixed tests", () => {
  expect(jumpingNumber(8987)).toBe("Jumping!!");
});

test("fixed tests", () => {
  expect(jumpingNumber(4343456)).toBe("Jumping!!");
});

test("fixed tests", () => {
  expect(jumpingNumber(98789876)).toBe("Jumping!!");
});
