const add1 = (elem, n) =>
  String.fromCharCode(((elem.charCodeAt(0) + n + 65) % 26) + 65);
const substract1 = (elem, n) =>
  String.fromCharCode(((elem.charCodeAt(0) + n - 65) % 26) + 65);

const playPass = (s, n) => {
  return s
    .replace(/[A-Z]/g, (el, i) =>
      el.charCodeAt() + n > 90 ? substract1(el, n) : add1(el, n)
    )
    .replace(/\d/g, (el) => Math.abs(el - 9))
    .replace(/[A-Z]/g, (el, i) => (i % 2 !== 0 ? el.toLowerCase() : el))
    .split("")
    .reverse()
    .join("");
};

module.exports = playPass;
