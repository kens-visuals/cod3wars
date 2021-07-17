const deckOfCards = () => {
  const suits = ["c", "d", "h", "s"];
  const ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
  ];
  let deck = [];

  for (let i = 0; i < suits.length; i++)
    for (let j = 0; j < ranks.length; j++) deck.push(ranks[j] + suits[i]);

  return deck;
};

function encode(input) {
  return deckOfCards()
    .map((el, i, a) => a.indexOf(input[i]))
    .filter((el) => el !== -1)
    .sort((a, b) => a - b);
}

function decode(input) {
  return deckOfCards()
    .map((el, i, a) => a[input.sort((a, b) => a - b)[i]])
    .filter((el) => el !== undefined);
}
