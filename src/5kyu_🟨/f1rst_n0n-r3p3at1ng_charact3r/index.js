const firstNonRepeatingLetter = (s) => {
  const l = s
    .toLowerCase()
    .split("")
    .filter((el, _, a) => a.indexOf(el) === a.lastIndexOf(el));

  return l.length === 0
    ? ""
    : s.includes(l[0].toUpperCase())
    ? l[0].toUpperCase()
    : l[0];
};

module.exports = firstNonRepeatingLetter;
