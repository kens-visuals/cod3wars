// const points = (games, point = 0) => {
//   games.forEach((i) => {
//     const sign = i.indexOf(":"),
//       num1 = i.slice(0, sign),
//       num2 = i.slice(sign + 1);

//     num1 > num2 ? (point += 3) : num1 === num2 ? (point += 1) : point;
//   });

//   return point;
// };

const points = (games) =>
  games
    .map((el) => el.split(":"))
    .map(([x, y]) => (x > y ? 3 : x === y ? 1 : 0))
    .reduce((acc, cur) => acc + cur);

module.exports = points;
