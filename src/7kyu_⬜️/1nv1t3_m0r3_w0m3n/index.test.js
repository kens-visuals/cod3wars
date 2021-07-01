const inviteMoreWomen = require("./index");

test("fixed tests", () => {
  expect(inviteMoreWomen([1, -1, 1])).toBe(true);
});

test("fixed tests", () => {
  expect(inviteMoreWomen([1, 1, 1])).toBe(true);
});

test("fixed tests", () => {
  expect(inviteMoreWomen([-1, -1, -1])).toBe(false);
});

test("fixed tests", () => {
  expect(inviteMoreWomen([1, -1])).toBe(false);
});
