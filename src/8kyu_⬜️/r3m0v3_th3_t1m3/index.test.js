const shortenToDate = require("./index");

test("fixed tests", () => {
  expect(shortenToDate("Friday May 2, 9am")).toBe("Friday May 2");
});

test("fixed tests", () => {
  expect(shortenToDate("Tuesday January 29, 10pm")).toBe("Tuesday January 29");
});

test("fixed tests", () => {
  expect(shortenToDate("Monday December 25, 10pm")).toBe("Monday December 25");
});
