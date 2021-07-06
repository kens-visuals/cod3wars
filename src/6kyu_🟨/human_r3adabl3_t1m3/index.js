const humanReadable = (seconds) => {
  const [hrs, mins, secs] = [
    ~~(seconds / 3600),
    ~~((seconds % 3600) / 60),
    ~~(seconds % 60),
  ];

  return `${hrs.toString().length === 1 ? `0${hrs}` : hrs}:${
    mins.toString().length === 1 ? `0${mins}` : mins
  }:${secs.toString().length === 1 ? `0${secs}` : secs}`;
};

module.exports = humanReadable;
