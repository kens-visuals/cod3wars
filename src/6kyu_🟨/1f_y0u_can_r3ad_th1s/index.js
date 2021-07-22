NATO = {
  a: "Alfa",
  n: "November",
  b: "Bravo",
  o: "Oscar",
  c: "Charlie",
  p: "Papa",
  d: "Delta",
  q: "Quebec",
  e: "Echo",
  r: "Romeo",
  f: "Foxtrot",
  s: "Sierra",
  g: "Golf",
  t: "Tango",
  h: "Hotel",
  u: "Uniform",
  i: "India",
  v: "Victor",
  j: "Juliett",
  w: "Whiskey",
  k: "Kilo",
  x: "Xray",
  l: "Lima",
  y: "Yankee",
  m: "Mike",
  z: "Zulu",
};

const to_nato = (words) =>
  words
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/\w/g, (el) => ` ${NATO[el]} `)
    .replace(/\s+/g, " ")
    .trim();

module.exports = to_nato;
