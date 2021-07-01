const inviteMoreWomen = (L) =>
  L.filter((el, i) => el > 0).length > L.filter((el, i) => el < 0).length
    ? true
    : false;

module.exports = inviteMoreWomen;
