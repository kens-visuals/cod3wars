const generateHashtag = (str) => {
  if (str.trim().length === 0) return false;

  const s = str
    .trim()
    .split(" ")
    .filter((el) => el !== "")
    .map((el) => el.replace(el[0], el[0].toUpperCase()))
    .join("");

  return s.length >= 140 ? false : `#${s}`;
};

module.exports = generateHashtag;
