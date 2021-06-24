// function charFreq(message) {
//   let obj = {};

//   message = message.split("").sort((a, b) => a.localeCompare(b));

//   message.forEach((i) => (obj[i] ? (obj[i] += 1) : (obj[i] = 1)));

//   return obj;
// }

const charFreq = (message) =>
  message.split("").reduce((acc, cur) => {
    acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
    return acc;
  }, {});

module.exports = charFreq;
