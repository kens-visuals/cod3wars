const titleCase = (title, minorWords = "") => {
  if (title.length === 0) return "";

  const str = title
    .toLowerCase()
    .split(" ")
    .map((el) =>
      minorWords.toLowerCase().split(" ").includes(el)
        ? el
        : el.replace(el[0], el[0].toUpperCase())
    )
    .join(" ");

  return str.replace(str[0], str[0].toUpperCase());
};

module.exports = titleCase;
