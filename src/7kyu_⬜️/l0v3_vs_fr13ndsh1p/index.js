// const wordsToMarks = (string, obj = {}, num = 0) => {
//     let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

//     string = string.split("").sort();

//     for (let [i, v] of alphabet.entries()) obj[alphabet[i]] = i + 1;

//     for (let i of string) num += obj[i];

//     return num;
//   };

const wordsToMarks = (string) => {
  const alpha = Array.from({ length: 26 }, (_, i) => i + 97)
    .map((el) => String.fromCharCode(el))
    .reduce((acc, cur, i) => {
      acc[cur] = i + 1;
      return acc;
    }, {});

  return string
    .split("")
    .map((el) => alpha[el])
    .reduce((acc, cur) => acc + cur);
};

module.exports = wordsToMarks;
