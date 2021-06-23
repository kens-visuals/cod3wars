// function splitAndMerge(string, separator) {
//   let str = string.split(" ");
//   let newStr = "";

//   for (let i of str) {
//     newStr += i.split("").join(separator) + " ";
//   }

//   return newStr.trim();
// }

const splitAndMerge = (string, separator) =>
  string
    .split(" ")
    .map((el) => el.split("").join(separator))
    .join(" ");

module.exports = splitAndMerge;
