const makeSentence = (parts) =>
  `${parts
    .filter((el) => el !== ".")
    .join(" ")
    .replace(/\s,/g, ",")}.`;

module.exports = makeSentence;
