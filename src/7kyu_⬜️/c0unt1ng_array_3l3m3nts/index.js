const count = (array, obj = {}) => {
  array.forEach((el) => (obj[el] ? (obj[el] += 1) : (obj[el] = 1)));
  return obj;
};

module.exports = count;
