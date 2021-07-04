const domainName = (url) => url.replace(/.+\/\/|www.|\..+/g, "");

module.exports = domainName;
