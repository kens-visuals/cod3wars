const Dad = require("./index");
const Bee = require("./index");
const banana = require("./index");

test("fixed tests", () => {
  expect(Dad()).toBe("Dad");
});

test("fixed tests", () => {
  expect(Bee()).toBe("Bee");
});

test("fixed tests", () => {
  expect(banana()).toBe("banana");
});
