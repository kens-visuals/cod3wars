// function howManydays(month) {
//   let days;
//   switch (month) {
//     case 2:
//       days = 28;
//       break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       days = 30;
//       break;

//     default:
//       days = 31;
//   }
//   return days;
// }

const howManydays = (month) => {
  switch (month) {
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }

  return month <= 12 ? 31 : "There's no such month!";
};

module.exports = howManydays;
