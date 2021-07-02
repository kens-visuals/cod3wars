const validateUsr = (username) => /^([a-z]|\d|_){4,16}$/g.test(username);

module.exports = validateUsr;
