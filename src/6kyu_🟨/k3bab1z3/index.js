// const kebabize = (str) => {
//   str = str.replace(/\d*/g, "");
//   str =
//     str[0] === str[0].toUpperCase()
//       ? str.replace(str[0], str[0].toLowerCase())
//       : str;

//   return str.replace(
//     /[A-Z]/g,
//     (el) => `-${el.toLowerCase().slice(el.indexOf())}`
//   );
// };

const kebabize = (str) =>
  (str = str
    .replace(/\d*/g, "")
    .replace(/^[A-Z]/g, (el) => el.toLowerCase())
    .replace(/[A-Z]/g, (el) => `-${el.toLowerCase()}`));

module.exports = kebabize;
