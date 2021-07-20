const getOrder = require("./index");

test("fixed tests", () => {
  expect(
    getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza")
  ).toBe(
    "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
  );
});

test("fixed tests", () => {
  expect(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich")).toBe(
    "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke"
  );
});
