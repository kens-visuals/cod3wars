const validateCode = (code) => /^(1|2|3)/g.test(code);

module.exports = validateCode;
