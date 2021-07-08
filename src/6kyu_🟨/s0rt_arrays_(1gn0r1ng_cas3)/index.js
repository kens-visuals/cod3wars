const sortme = (names) =>
  names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

module.exports = sortme;
