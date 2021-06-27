// const predictAge = (age1, age2, age3, age4, age5, age6, age7, age8) => {
//   const ages = [age1, age2, age3, age4, age5, age6, age7, age8];

//   return Math.floor(
//     Math.sqrt(ages.map((el) => el * el).reduce((acc, cur) => acc + cur, 0)) / 2
//   );
// };

const predictAge = (...ages) =>
  Math.floor(
    Math.sqrt(ages.map((el) => el * el).reduce((acc, cur) => acc + cur, 0)) / 2
  );

module.exports = predictAge;
