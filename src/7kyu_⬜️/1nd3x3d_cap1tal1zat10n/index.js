const capitalize = (s, arr) => {
  for (let i = 0; i < arr.length; i++) {
    s = `${s.substring(0, arr[i])}${s
      .substring(arr[i], arr[i] + 1)
      .toUpperCase()}${s.substring(arr[i] + 1)}`;
  }
  return s;
};

module.exports = capitalize;
