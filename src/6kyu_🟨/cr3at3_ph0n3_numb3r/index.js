const createPhoneNumber = (numbers) =>
  `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`
    .split(",")
    .join("");

module.exports = createPhoneNumber;
