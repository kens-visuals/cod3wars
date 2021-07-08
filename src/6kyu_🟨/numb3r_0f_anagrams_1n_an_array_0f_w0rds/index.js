const sorted = (str) => str.split("").sort().join("");

const anagramCounter = (wordsArray) => {
  let counter = 0;

  for (let i = 0; i < wordsArray.length; i++)
    for (let k = i + 1; k < wordsArray.length; k++)
      if (sorted(wordsArray[i]) === sorted(wordsArray[k])) counter++;

  return counter;
};

module.exports = anagramCounter;
