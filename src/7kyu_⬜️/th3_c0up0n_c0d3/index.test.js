const checkCoupon = require("./index");

test("fixed tests", () => {
  expect(
    checkCoupon("123", "123", "September 5, 2014", "October 1, 2014")
  ).toBe(true);
});

test("fixed tests", () => {
  expect(
    checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014")
  ).toBe(false);
});
