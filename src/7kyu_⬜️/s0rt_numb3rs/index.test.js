const solution = require("./index");

test("fixed tests", () => {
  expect(solution([1, 2, 3, 10, 5])).toEqual([1, 2, 3, 5, 10]);
});

test("fixed tests", () => {
  expect(solution(null)).toEqual([]);
});

test("fixed tests", () => {
  expect(solution([])).toEqual([]);
});

test("fixed tests", () => {
  expect(solution([20, 2, 10])).toEqual([2, 10, 20]);
});

test("fixed tests", () => {
  expect(solution([2, 20, 10])).toEqual([2, 10, 20]);
});
