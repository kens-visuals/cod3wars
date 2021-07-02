const strReducer = (str) =>
  str
    .toUpperCase()
    .split("")
    .map((el) => el.charCodeAt())
    .reduce((acc, cur) => acc + cur);

const compare = (s1, s2) => {
  if (!s1 || !s2) return true;
  if (s1.match(/\d/) || s2.match(/\d/)) return true;

  return strReducer(s1) === strReducer(s2);
};

module.exports = compare;
