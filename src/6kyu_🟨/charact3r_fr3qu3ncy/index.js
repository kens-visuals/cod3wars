const letterFrequency = (text) => {
  return Object.entries(
    text
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .split("")
      .reduce((acc, cur, i) => {
        acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
        return acc;
      }, {})
  ).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
};

module.exports = letterFrequency;
