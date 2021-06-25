function nbYear(p0, percent, aug, p, year = 0) {
  percent = percent / 100;

  for (let i = 0; i < p; i++) {
    p0 = Math.floor(p0 + p0 * percent + aug);

    year++;

    if (p0 >= p) return year;
  }
}

module.exports = nbYear;
