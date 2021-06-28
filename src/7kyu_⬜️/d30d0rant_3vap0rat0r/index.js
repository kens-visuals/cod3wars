const evaporator = (content, evapPerDay, threshold) => {
  let day = 0,
    percentage = 100;

  while (percentage > threshold) {
    percentage -= percentage * (evapPerDay / 100);
    day += 1;
  }

  return day;
};

module.exports = evaporator;
