const menFromBoys = require("./index");

test("fixed tests", () => {
  expect(menFromBoys([7, 3, 14, 17])).toEqual([14, 17, 7, 3]);
});

test("fixed tests", () => {
  expect(menFromBoys([2, 43, 95, 90, 37])).toEqual([2, 90, 95, 43, 37]);
});

test("fixed tests", () => {
  expect(menFromBoys([20, 33, 50, 34, 43, 46])).toEqual([
    20,
    34,
    46,
    50,
    43,
    33,
  ]);
});

test("fixed tests", () => {
  expect(menFromBoys([82, 91, 72, 76, 76, 100, 85])).toEqual([
    72,
    76,
    82,
    100,
    91,
    85,
  ]);
});

test("fixed tests", () => {
  expect(menFromBoys([2, 15, 17, 15, 2, 10, 10, 17, 1, 1])).toEqual([
    2,
    10,
    17,
    15,
    1,
  ]);
});

test("fixed tests", () => {
  expect(menFromBoys([-32, -39, -35, -41])).toEqual([-32, -35, -39, -41]);
});

test("fixed tests", () => {
  expect(menFromBoys([-64, -71, -63, -66, -65])).toEqual([
    -66,
    -64,
    -63,
    -65,
    -71,
  ]);
});

test("fixed tests", () => {
  expect(menFromBoys([-94, -99, -100, -99, -96, -99])).toEqual([
    -100,
    -96,
    -94,
    -99,
  ]);
});

test("fixed tests", () => {
  expect(menFromBoys([-53, -26, -53, -27, -49, -51, -14])).toEqual([
    -26,
    -14,
    -27,
    -49,
    -51,
    -53,
  ]);
});

test("fixed tests", () => {
  expect(menFromBoys([-17, -45, -15, -33, -85, -56, -86, -30])).toEqual([
    -86,
    -56,
    -30,
    -15,
    -17,
    -33,
    -45,
    -85,
  ]);
});

test("fixed tests", () => {
  expect(menFromBoys([12, 89, -38, -78])).toEqual([-78, -38, 12, 89]);
});

test("fixed tests", () => {
  expect(menFromBoys([2, -43, 95, -90, 37])).toEqual([-90, 2, 95, 37, -43]);
});

test("fixed tests", () => {
  expect(menFromBoys([82, -61, -87, -12, 21, 1])).toEqual([
    -12,
    82,
    21,
    1,
    -61,
    -87,
  ]);
});

test("fixed tests", () => {
  expect(menFromBoys([63, -57, 76, -85, 88, 2, -28])).toEqual([
    -28,
    2,
    76,
    88,
    63,
    -57,
    -85,
  ]);
});

test("fixed tests", () => {
  expect(menFromBoys([49, 818, -282, 900, 928, 281, -282, -1])).toEqual([
    -282,
    818,
    900,
    928,
    281,
    49,
    -1,
  ]);
});
