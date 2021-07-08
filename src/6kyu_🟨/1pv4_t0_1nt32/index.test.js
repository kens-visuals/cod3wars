const ipToInt32 = require("./index");

test("fixed tests", () => {
  expect(ipToInt32("128.32.10.1")).toBe(
    2149583361,
    "wrong integer for ip: 128.32.10.1"
  );
});
