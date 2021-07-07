const encryptThis = (text) =>
  text
    .split(" ")
    .map((el) => {
      const first = el.slice(0, 1);
      const second = el.slice(1, 2);
      const mid = el.slice(2, -1);
      const last = el.slice(-1);
      return el.length === 1
        ? `${first.charCodeAt()}`
        : el.length === 2
        ? `${first.charCodeAt()}${last}${mid}`
        : `${first.charCodeAt()}${last}${mid}${second}`;
    })
    .join(" ");

module.exports = encryptThis;
