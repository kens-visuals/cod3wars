// function alienLanguage(str) {
//   let newStr = str.toUpperCase().split(" ");

//   for (let i = 0; i < newStr.length; i++) {
//     const last = newStr[i].slice(-1);
//     const regex = new RegExp(`${last}$`, "gi");

//     newStr[i] = newStr[i].replace(regex, last.toLowerCase());
//   }

//   return newStr.join(" ");
// }

const alienLanguage = (str) =>
  str.replace(
    /\w+/g,
    (el) => el.slice(0, -1).toUpperCase() + el.slice(-1).toLowerCase()
  );

module.exports = alienLanguage;
