const encode = (string) => {
  const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  return string.replace(/a|e|i|o|u/gi, (el) => vowels[el]);
};

const decode = (string) => {
  const numbers = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };

  return string.replace(/1|2|3|4|5/gi, (el) => numbers[el]);
};
