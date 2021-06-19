// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, "");
// }

const disemvowel = (str) => str.split(/[aeiou]/gi).join("");

module.exports = disemvowel;
