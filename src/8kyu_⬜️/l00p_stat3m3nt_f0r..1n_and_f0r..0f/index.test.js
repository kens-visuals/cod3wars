const giveMeFive = require("./index");

test("fixed tests", () => {
  expect(giveMeFive({ Our: "earth", is: "a", beautyful: "world" })).toEqual([
    "earth",
    "world",
  ]);
});

test("fixed tests", () => {
  expect(
    giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" })
  ).toEqual(["Ihave", "money", "model"]);
});

test("fixed tests", () => {
  expect(giveMeFive({ Pears: "than", apple: "sweet" })).toEqual([
    "Pears",
    "apple",
    "sweet",
  ]);
});
