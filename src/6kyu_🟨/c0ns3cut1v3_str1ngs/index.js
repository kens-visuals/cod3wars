const longestConsec = (strarr, k) =>
  k < 0 || k > strarr.length
    ? ""
    : strarr
        .map((_, i) => strarr.slice(i, k + i).join(""))
        .reduce((acc, cur) => (cur.length > acc.length ? cur : acc));

module.exports = longestConsec;
