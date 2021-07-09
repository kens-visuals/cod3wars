const dup = (s) =>
  s.map((el) =>
    el
      .split("")
      .filter((el, i, a) => el !== a[i + 1])
      .join("")
  );

module.exports = dup;
