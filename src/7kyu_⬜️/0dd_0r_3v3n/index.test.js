const oddOrEven = require("./index");

test("fixed tests", () => {
  expect(oddOrEven([0])).toBe("even");
});

test("fixed tests", () => {
  expect(oddOrEven([1])).toBe("odd");
});

test("fixed tests", () => {
  expect(oddOrEven([])).toBe("even");
});

test("fixed tests", () => {
  expect(oddOrEven([0, 1, 5])).toBe("even");
});

test("fixed tests", () => {
  expect(oddOrEven([0, 1, 3])).toBe("even");
});

test("fixed tests", () => {
  expect(oddOrEven([1023, 1, 2])).toBe("even");
});

test("fixed tests", () => {
  expect(oddOrEven([0, -1, -5])).toBe("even");
});

test("fixed tests", () => {
  expect(oddOrEven([0, -1, -3])).toBe("even");
});

test("fixed tests", () => {
  expect(oddOrEven([-1023, 1, -2])).toBe("even");
});

test("fixed tests", () => {
  expect(oddOrEven([0, 1, 2])).toBe("odd");
});

test("fixed tests", () => {
  expect(oddOrEven([0, 1, 4])).toBe("odd");
});

test("fixed tests", () => {
  expect(oddOrEven([1023, 1, 3])).toBe("odd");
});

test("fixed tests", () => {
  expect(oddOrEven([0, -1, 2])).toBe("odd");
});

test("fixed tests", () => {
  expect(oddOrEven([0, 1, -4])).toBe("odd");
});

test("fixed tests", () => {
  expect(oddOrEven([-1023, -1, 3])).toBe("odd");
});
