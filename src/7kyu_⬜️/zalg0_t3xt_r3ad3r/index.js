const readZalgo = (zalgotext) => zalgotext.replace(/[^\w.,!? ]/g, "");

module.exports = readZalgo;
