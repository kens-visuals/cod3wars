const goodVsEvil = (good, evil) => {
  good = good.split(" ").map(Number);
  evil = evil.split(" ").map(Number);

  const goodTeam = [1, 2, 3, 3, 4, 10];
  const evilTeam = [1, 2, 2, 2, 3, 5, 10];

  const goodPower = goodTeam
    .map((el, i) => el * good[i])
    .reduce((acc, cur) => acc + cur);

  const evilPower = evilTeam
    .map((el, i) => el * evil[i])
    .reduce((acc, cur) => acc + cur);

  return goodPower === evilPower
    ? "Battle Result: No victor on this battle field"
    : goodPower > evilPower
    ? "Battle Result: Good triumphs over Evil"
    : "Battle Result: Evil eradicates all trace of Good";
};

module.exports = goodVsEvil;
