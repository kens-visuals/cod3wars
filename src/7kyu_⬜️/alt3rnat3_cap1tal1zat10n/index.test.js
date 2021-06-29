const capitalize = require("./index");

test("fixed tests", () => {
  expect(capitalize("abcdef")).toEqual(["AbCdEf", "aBcDeF"]);
});

test("fixed tests", () => {
  expect(capitalize("codewars")).toEqual(["CoDeWaRs", "cOdEwArS"]);
});

test("fixed tests", () => {
  expect(capitalize("abracadabra")).toEqual(["AbRaCaDaBrA", "aBrAcAdAbRa"]);
});

test("fixed tests", () => {
  expect(capitalize("codewarriors")).toEqual(["CoDeWaRrIoRs", "cOdEwArRiOrS"]);
});
