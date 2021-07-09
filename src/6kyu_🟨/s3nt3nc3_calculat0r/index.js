function lettersToNumbers(s) {
  s = s.split("");

  const evenNums = Array.from(Array(52), (_, i) => i + 2).filter(
    (el) => el % 2 === 0
  );

  const lowerCase = Array.from(Array(26), (_, i) => i + 97)
    .map((el) => String.fromCharCode(el))
    .reduce((acc, cur, i) => {
      acc[cur] = i + 1;
      return acc;
    }, {});

  const upperCase = Array.from(Array(26), (_, i) => i + 65)
    .map((el) => String.fromCharCode(el))
    .reduce((acc, cur, i) => {
      acc[cur] = evenNums[i];
      return acc;
    }, {});

  const filteredNums = s.filter((el) => el.match(/[0-9]/g)).map(Number);

  const filteredLetters = s
    .filter((el) => el.match(/[a-zA-Z]/g))
    .map((el) => {
      if (el === el.toUpperCase()) return upperCase[el];
      else if (el === el.toLowerCase()) return lowerCase[el];
    })
    .reduce((acc, cur) => acc + cur, 0);

  return [filteredLetters, ...filteredNums].reduce((acc, cur) => acc + cur, 0);
}

module.exports = lettersToNumbers;
