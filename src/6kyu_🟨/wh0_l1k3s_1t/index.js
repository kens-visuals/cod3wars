const likes = (names) => {
  if (names.length === 0) return "no one likes this";
  if (names.length === 2) return `${names.slice(-2).join(" and ")} like this`;
  if (names.length === 3)
    return `${names.slice(0, 2).join(", ")} and ${names.slice(-1)} like this`;
  if (names.length > 3)
    return `${names.slice(0, 2).join(", ")} and ${
      names.length - 2
    } others like this`;
  return `${names} likes this`;
};

module.exports = likes;
