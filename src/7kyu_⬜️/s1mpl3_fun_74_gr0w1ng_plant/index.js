const growingPlant = (
  upSpeed,
  downSpeed,
  desiredHeight,
  [i, num] = [1, upSpeed]
) => {
  while (num < desiredHeight) {
    i++;
    num += upSpeed - downSpeed;
  }
  return i;
};

module.exports = growingPlant;
