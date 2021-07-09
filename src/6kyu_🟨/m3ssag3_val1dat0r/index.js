const isAValidMessage = (message) => {
  if (+message.slice(-1)) return false;

  const nums = message
    .split(/[a-z]/gi)
    .filter((el) => el !== "")
    .map(Number);

  const words = message
    .split(/[0-9]/g)
    .filter((el) => el !== "")
    .map((el) => el.length);

  return nums.filter((el, i) => el !== words[i]).length === 0 ? true : false;
};

module.exports = isAValidMessage;
