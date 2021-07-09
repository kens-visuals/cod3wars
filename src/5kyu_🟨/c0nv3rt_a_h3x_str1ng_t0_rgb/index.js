function hexStringToRGB(hexString) {
  hexString = hexString.slice(1);

  const rgb = {
    r: parseInt(hexString.slice(0, 2), 16),
    g: parseInt(hexString.slice(2, 4), 16),
    b: parseInt(hexString.slice(4, 6), 16),
  };

  return rgb;
}

module.exports = hexStringToRGB;
