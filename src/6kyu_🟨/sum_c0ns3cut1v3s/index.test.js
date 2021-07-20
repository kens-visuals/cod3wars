const sumConsecutives = require("./index");

test("fixed tests", () => {
  expect(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1])).toEqual(
    [1, 12, 0, 4, 6, 1],
    "on list [1,4,4,0,4,3,3,1] you get "
  );
});

test("fixed tests", () => {
  expect(sumConsecutives([1, 1, 7, 7, 3])).toEqual(
    [2, 14, 3],
    "on list [1,1,7,7,3] you get "
  );
});

test("fixed tests", () => {
  expect(sumConsecutives([-5, -5, 7, 7, 12, 0])).toEqual(
    [-10, 14, 12, 0],
    "on list [-5,-5,7,7,12,0] you get "
  );
});

test("fixed tests", () => {
  expect(sumConsecutives([3, 3, 3, 3, 1])).toEqual(
    [12, 1],
    "on list [3,3,3,3,1] you get "
  );
});
