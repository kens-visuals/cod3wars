// const longest = (s1, s2) => {
//     let str = new Set(s1 + s2);

//     return [...str].sort().join("");
//   };

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

module.exports = longest;
