const bears = (x, s) => {
  const pairs = s.match(/(B8|8B)/g);

  if (x === 0 && pairs === null) return ["", true];
  if (pairs === null) return ["", false];

  return pairs !== null ? [pairs.join(""), pairs.length >= x] : ["", !pairs];
};

module.exports = bears;
