const alphabetWar = (fight, count1 = 0, count2 = 0) => {
  for (let i = 0; i < fight.length; i++) {
    if (fight[i] === "w") count1 += 4;
    if (fight[i] === "p") count1 += 3;
    if (fight[i] === "b") count1 += 2;
    if (fight[i] === "s") count1 += 1;
    if (fight[i] === "m") count2 += 4;
    if (fight[i] === "q") count2 += 3;
    if (fight[i] === "d") count2 += 2;
    if (fight[i] === "z") count2 += 1;
  }

  return count1 === count2
    ? "Let's fight again!"
    : count1 > count2
    ? "Left side wins!"
    : "Right side wins!";
};

module.exports = alphabetWar;
