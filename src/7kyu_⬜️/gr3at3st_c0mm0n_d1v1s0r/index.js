const mygcd = (x, y) => (y == 0 ? x : mygcd(y, x % y));

module.exports = mygcd;
