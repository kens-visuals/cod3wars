const wave = (str) =>
  [...str]
    .map(
      (el, i) =>
        `${str.slice(0, i)}${el.toUpperCase()}${str.slice(i + 1, str.length)}`
    )
    .filter((s) => /[A-Z]/.test(s));

module.exports = wave;
