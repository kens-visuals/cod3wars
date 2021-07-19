const abbreviate = (string) =>
  string.replace(/\w+/g, (el) =>
    el.length >= 4 ? `${el.slice(0, 1)}${el.length - 2}${el.slice(-1)}` : el
  );

module.exports = abbreviate;
