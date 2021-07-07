const songDecoder = (song) =>
  song
    .split("WUB")
    .filter((el) => el !== "")
    .join(" ");

module.exports = songDecoder;
