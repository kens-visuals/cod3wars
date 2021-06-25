const validatePIN = (pin) => (pin.match(/^(\d{4}|\d{6})$/gi) ? true : false);

module.exports = validatePIN;
