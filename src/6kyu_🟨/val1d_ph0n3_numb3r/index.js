const validPhoneNumber = (phoneNumber) =>
  !!phoneNumber.match(/^\(\d{3}\)\s\d{3}\-\d{4}$/g);

module.exports = validPhoneNumber;
