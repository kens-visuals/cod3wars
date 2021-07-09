const mirror = require("./index");

test("fixed tests", () => {
  expect(mirror("Hello World")).toBe(
    "*********\n* olleH *\n* dlroW *\n*********"
  );
});

test("fixed tests", () => {
  expect(mirror("Codewars")).toBe("************\n* srawedoC *\n************");
});
