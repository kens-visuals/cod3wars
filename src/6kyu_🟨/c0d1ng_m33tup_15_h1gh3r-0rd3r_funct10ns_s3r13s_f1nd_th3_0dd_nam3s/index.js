const findOddNames = (list) =>
  list.filter(
    (el) =>
      el.firstName
        .split("")
        .map((el) => el.charCodeAt())
        .reduce((acc, cur) => acc + cur) %
        2 !==
      0
  );

module.exports = findOddNames;
