const bingo = (ticket, win) =>
  ticket
    .map(([a, b]) => a.split("").filter((el) => el.charCodeAt() === b))
    .filter((el) => el.length !== 0).length >= win
    ? "Winner!"
    : "Loser!";

module.exports = bingo;
