const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) =>
  enteredCode === correctCode &&
  Date.parse(expirationDate) >= Date.parse(currentDate);

module.exports = checkCoupon;
