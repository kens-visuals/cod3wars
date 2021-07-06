const isPangram = (string) =>
  Object.entries(
    string
      .toLowerCase()
      .replace(/\.|\s/g, "")
      .split("")
      .map((el) => el.charCodeAt() - 96)
      .reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
      }, {})
  ).length >= 26;

//     .forEach((el) => (obj[el] ? (obj[el] += 1) : (obj[el] = 1)));

//   return Object.entries(obj).length >= 26 ? true : false;

module.exports = isPangram;
