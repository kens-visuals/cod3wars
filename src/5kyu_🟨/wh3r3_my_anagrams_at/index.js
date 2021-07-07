function anagrams(word, words) {
  const newWord = word.split("").sort().join("");

  return words.filter(
    (el) =>
      newWord.length === el.length &&
      el.split("").sort().join("").includes(newWord)
  );
}

module.exports = anagrams;
