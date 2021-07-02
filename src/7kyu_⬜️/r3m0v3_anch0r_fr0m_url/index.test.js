const removeUrlAnchor = require("./index");

test("fixed tests", () => {
  expect(removeUrlAnchor("www.codewars.com#about")).toBe("www.codewars.com");
});

test("fixed tests", () => {
  expect(removeUrlAnchor("www.codewars.com/katas/?page=1#about")).toBe(
    "www.codewars.com/katas/?page=1"
  );
});

test("fixed tests", () => {
  expect(removeUrlAnchor("www.codewars.com/katas/")).toBe(
    "www.codewars.com/katas/"
  );
});
