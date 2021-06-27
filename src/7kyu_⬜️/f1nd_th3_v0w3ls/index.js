// const vowelIndices = (word, arr = []) => {
//   for (let i = 0; i < word.length; i++)
//     if (/[aeioyu]/i.test(word[i])) arr.push(i + 1);

//   return arr;
// };

const vowelIndices = (word) =>
  [...word]
    .map((el, i) => (el.match(/[aeiouy]/gi) ? i + 1 : ""))
    .filter((e) => e);

module.exports = vowelIndices;
