cleanString = (s, res = []) => {
  [...s].map((el) => (el === "#" ? res.pop() : res.push(el)));
  return res.join("");
};

module.exports = cleanString;
