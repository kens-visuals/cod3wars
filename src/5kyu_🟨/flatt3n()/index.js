const flatten = (...items) =>
  items.reduce(function iter(el, arr) {
    return Array.isArray(arr) ? arr.reduce(iter, el) : [...el, arr];
  }, []);

module.exports = flatten;
