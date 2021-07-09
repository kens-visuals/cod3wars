function longestRepetition(s) {
  let res = "";
  let count = 1;
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      if (arr.every((el) => el < count)) res = s[i] + count;

      arr.push(count);
      count = 1;
    }
  }

  return !res ? ["", 0] : [res.slice(0, 1), res.slice(1) * 1];
}

module.exports = longestRepetition;
