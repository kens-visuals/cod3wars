const countSmileys = (arr) =>
  arr.filter((el) => el.match(/^(:|;)(-?|~?)(D|\))$/gi)).length;

module.exports = countSmileys;
