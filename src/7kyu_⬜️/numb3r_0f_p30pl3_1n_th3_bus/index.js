const number = (busStops, count = 0) => {
  busStops.forEach((i) => (count += i[0] - i[1]));
  return count;
};

module.exports = number;
