const encode = (str, n, alphabet = {}, arr = []) => {
  const alpha = "abcdefghijklmnopqrstuvwxyz";

  n = n
    .toString()
    .repeat(str.length)
    .slice(0, str.length)
    .split("")
    .map(Number);

  for (let i = 0; i < alpha.length; i++) alphabet[alpha[i]] = i + 1;
  for (let i = 0; i < str.length; i++) arr.push(n[i] + alphabet[str[i]]);

  return arr;
};

module.exports = encode;
