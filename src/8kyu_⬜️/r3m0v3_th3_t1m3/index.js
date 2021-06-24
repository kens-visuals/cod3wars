// function shortenToDate(longDate) {
//   const at = longDate.split("").findIndex((el) => el === ",");

//   return longDate.split("").slice(0, at).join("");
// }

const shortenToDate = (longDate) => longDate.split(",")[0];

module.exports = shortenToDate;
