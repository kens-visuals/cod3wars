const Dinglemouse = require("./index");

test("fixed tests", () => {
  expect(new Dinglemouse("Clint", "Eastwood").getFullName()).toBe(
    "Clint Eastwood"
  );
});
