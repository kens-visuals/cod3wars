const getStrings = (city, obj = {}) => {
  city
    .toLowerCase()
    .split("")
    .forEach((i) => (obj[i] ? (obj[i] += "*") : (obj[i] = "*")));

  return Object.entries(obj)
    .filter((el) => el[0] !== " ")
    .map((el) => el.join(":"))
    .join(",");
};

module.exports = getStrings;
