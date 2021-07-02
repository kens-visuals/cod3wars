const greet = (name) =>
  `Hello ${name.toLowerCase().replace(name[0], name[0].toUpperCase())}!`;

module.exports = greet;
