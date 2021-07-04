const repeater = require("./index");

test("fixed tests", () => {
  expect(repeater("a", 5)).toBe("aaaaa");
});

test("fixed tests", () => {
  expect(repeater("Na", 16)).toBe("NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa");
});

test("fixed tests", () => {
  expect(repeater("Wub ", 6)).toBe("Wub Wub Wub Wub Wub Wub ");
});
