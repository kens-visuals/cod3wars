const tidyNumber = (n) => +n.toString().split("").sort().join("") === n;

module.exports = tidyNumber;
