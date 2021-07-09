const letterCount = require("./index");

test("fixed tests", () => {
  expect(letterCount("codewars")).toEqual({
    a: 1,
    c: 1,
    d: 1,
    e: 1,
    o: 1,
    r: 1,
    s: 1,
    w: 1,
  });
});

test("fixed tests", () => {
  expect(letterCount("activity")).toEqual({
    a: 1,
    c: 1,
    i: 2,
    t: 2,
    v: 1,
    y: 1,
  });
});

test("fixed tests", () => {
  expect(letterCount("arithmetics")).toEqual({
    a: 1,
    c: 1,
    e: 1,
    h: 1,
    i: 2,
    m: 1,
    r: 1,
    s: 1,
    t: 2,
  });
});

test("fixed tests", () => {
  expect(letterCount("traveller")).toEqual({
    a: 1,
    e: 2,
    l: 2,
    r: 2,
    t: 1,
    v: 1,
  });
});

test("fixed tests", () => {
  expect(letterCount("daydreamer")).toEqual({
    a: 2,
    d: 2,
    e: 2,
    m: 1,
    r: 2,
    y: 1,
  });
});
