const sortTheInnerContent = (words) =>
  words
    .split(" ")
    .map((el) =>
      el.length > 3
        ? `${el.slice(0, 1)}${el
            .slice(1, -1)
            .split("")
            .sort((a, b) => b.localeCompare(a))
            .join("")}${el.slice(-1)}`
        : el
    )
    .join(" ");

module.exports = sortTheInnerContent;
