const findMissingLetter = (array, found = "") => {
  let currCharCode = array.join("").charCodeAt(0);

  array.forEach((letter) => {
    letter.charCodeAt(0) === currCharCode
      ? currCharCode++
      : (found = String.fromCharCode(currCharCode));
  });

  return found;
};

module.exports = findMissingLetter;
