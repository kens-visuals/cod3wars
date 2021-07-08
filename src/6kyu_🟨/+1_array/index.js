const upArray = (arr) => {
  if (arr[0] === 9 && arr[1] === 9)
    return [+arr.join("") + 1].join("").split("").map(Number);

  return arr.length === 0 || arr.filter((el) => el < 0 || el > 9).length > 0
    ? null
    : +arr.slice(-1) === 9
    ? [...arr.slice(0, -2), (+arr.slice(-2).join("") + 1).toString()]
        .join("")
        .split("")
        .map(Number)
    : [...arr.slice(0, -1), +arr.slice(-1) + 1];
};

module.exports = upArray;
