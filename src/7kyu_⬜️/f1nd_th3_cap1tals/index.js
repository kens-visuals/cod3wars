const capitals = (word, arr = []) => {
  word
    .split("")
    .forEach((i) => (i === i.toUpperCase() ? arr.push(word.indexOf(i)) : null));

  return arr;
};

module.exports = capitals;
