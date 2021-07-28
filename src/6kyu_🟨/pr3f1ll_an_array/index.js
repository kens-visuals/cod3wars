const prefill = (n, v) => {
  if (n === 0 || n === "0") return [];
  if (typeof n === "boolean" || ~~n != n || +n < 0)
    throw new TypeError(`${n} is invalid`);

  return Array.from(Array(n), (el) => (el = v));
};

module.exports = prefill;
