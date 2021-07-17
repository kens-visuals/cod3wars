const add13 = (num) => String.fromCharCode(num.charCodeAt() + 13);
const subtract13 = (num) => String.fromCharCode(num.charCodeAt() - 13);

const rot13 = (message) =>
  message.replace(/[a-zA-Z]/g, (el) => {
    if (el === el.toUpperCase())
      return el.charCodeAt() + 13 > 90 ? subtract13(el) : add13(el);
    if (el === el.toLowerCase())
      return el.charCodeAt() + 13 > 122 ? subtract13(el) : add13(el);
  });

module.exports = rot13;
