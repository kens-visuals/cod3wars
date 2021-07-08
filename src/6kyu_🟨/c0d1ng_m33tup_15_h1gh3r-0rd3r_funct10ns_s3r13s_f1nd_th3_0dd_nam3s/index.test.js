const findOddNames = require("./index");

const list1 = [
  {
    firstName: "Aba",
    lastName: "N.",
    country: "Ghana",
    continent: "Africa",
    age: 21,
    language: "Python",
  },
  {
    firstName: "Abb",
    lastName: "O.",
    country: "Israel",
    continent: "Asia",
    age: 39,
    language: "Java",
  },
];

const answer1 = [
  {
    firstName: "Abb",
    lastName: "O.",
    country: "Israel",
    continent: "Asia",
    age: 39,
    language: "Java",
  },
];

const list2 = [
  {
    firstName: "Aba",
    lastName: "N.",
    country: "Ghana",
    continent: "Africa",
    age: 21,
    language: "Python",
  },
];

const answer2 = [];

test("fixed tests", () => {
  expect(findOddNames(list1)).toEqual(answer1);
});

test("fixed tests", () => {
  expect(findOddNames(list2)).toEqual(answer2);
});
