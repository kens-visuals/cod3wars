const getOrder = (input) =>
  [
    "burger",
    "fries",
    "chicken",
    "pizza",
    "sandwich",
    "onionrings",
    "milkshake",
    "coke",
  ]
    .map((el) => input.match(new RegExp(el, "gi")))
    .filter(Boolean)
    .reduce((acc, cur) => [...acc, ...cur], [])
    .map((el) => el.replace(el[0], el[0].toUpperCase()))
    .join(" ");

module.exports = getOrder;
