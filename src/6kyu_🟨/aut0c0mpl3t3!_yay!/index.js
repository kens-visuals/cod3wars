// const autocomplete = (input, dictionary) => {
//   input = input.replace(/[^a-z\s-]/gi, "");
//   const words = dictionary
//     .map((el) => el.replace(/[^a-z\s-]/gi, ""))
//     .filter((el) => el.toLowerCase().startsWith(input));

//   return words.length > 5 ? words.slice(0, 5) : words;
// };

const autocomplete = (input, dictionary) => {
  const words = dictionary.filter((el) =>
    el.toLowerCase().startsWith(input.replace(/[^a-z\s-]/gi, ""))
  );

  return words.length > 5 ? words.slice(0, 5) : words;
};

module.exports = autocomplete;
