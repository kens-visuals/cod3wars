const isAgeDiverse = (list) =>
  [
    [10, 20],
    [20, 30],
    [30, 40],
    [40, 50],
    [50, 60],
    [60, 70],
    [70, 80],
    [80, 90],
    [90, 100],
    [100, 200],
  ].every(([minAge, maxAge]) =>
    list.some((v) => v.age >= minAge && v.age < maxAge)
  );

module.exports = isAgeDiverse;
