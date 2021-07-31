const multiply = require("./index");

test("fixed tests", () => {
  expect(multiply("2", "3")).toBe("6");
});

test("fixed tests", () => {
  expect(multiply("30", "69")).toBe("2070");
});

test("fixed tests", () => {
  expect(multiply("11", "85")).toBe("935");
});

test("fixed tests", () => {
  expect(multiply("2", "0")).toBe("0");
});

test("fixed tests", () => {
  expect(multiply("0", "30")).toBe("0");
});

test("fixed tests", () => {
  expect(multiply("0000001", "3")).toBe("3");
});

test("fixed tests", () => {
  expect(multiply("1009", "03")).toBe("3027");
});

test("fixed tests", () => {
  expect(multiply("98765", "56894")).toBe("5619135910");
});

test("fixed tests", () => {
  expect(multiply("58608473622772837728372827", "7586374672263726736374")).toBe(
    "444625839871840560024489175424316205566214109298"
  );
});

test("fixed tests", () => {
  expect(multiply("9007199254740991", "9007199254740991")).toBe(
    "81129638414606663681390495662081"
  );
});
