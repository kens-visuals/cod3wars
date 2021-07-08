function catalog(s, article) {
  // str = e.g. "<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>"
  const str = s.split("\n").filter((el) => el !== "" && el.includes(article));

  // nums = e.g. ["1099.99","5","9","10"...]
  const nums = str
    .map((el) => `${el.match(/\d+\.*\d*/gi)}`)
    .join(",")
    .split(",");

  const prx = nums.filter((_, i) => i % 2 === 0); // prx = e.g ["1099.99","9","13.80"]
  const qty = nums.filter((_, i) => i % 2 !== 0); // qty = e.g ["5","10","32"]

  // newStr = e.g ["table saw > prx: $1099.99 qty: 5\r\nsaw > prx: $9 qty: 10\r\n...]
  const newStr = str
    .map((el) => `${el.match(/>[a-z]+(\s?)(\w?)+(\s?)(\w?)+/gi)}`)
    .map((el, i) => `${el.slice(1)} > prx: $${prx[i]} qty: ${qty[i]}`)
    .join("\r\n");

  return newStr.length === 0 ? "Nothing" : newStr;
}

module.exports = catalog;
