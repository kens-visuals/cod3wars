const addLetters = (letters) =>
  String.fromCharCode(
    96 +
      (letters.reduce((acc, cur) => acc + cur.charCodeAt() - 96, 0) % 26 || 26)
  );

module.exports = addLetters;
