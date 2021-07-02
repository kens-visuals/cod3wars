const lowercaseCount = (str) =>
  str.split("").filter((el) => el.match(/[a-z]/g)).length;

module.exports = lowercaseCount;
