function mirror(text) {
  const maxWordLength = Math.max(...text.split(" ").map((el) => el.length));
  const middle = `${text
    .split(" ")
    .map(
      (el) =>
        `* ${el.split("").reverse().join("").padEnd(maxWordLength, " ")} *`
    )
    .join("\n")}`;

  const pattern = "*".repeat(maxWordLength + 4);

  return `${pattern}\n${middle}\n${pattern}`;
}

module.exports = mirror;
