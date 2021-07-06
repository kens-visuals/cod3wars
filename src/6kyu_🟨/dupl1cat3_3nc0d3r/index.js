const duplicateEncode = (word) =>
  word
    .toLowerCase()
    .split("")
    .map((el, i, a) =>
      a.indexOf(el) !== a.lastIndexOf(el)
        ? el.replace(el, ")")
        : el.replace(el, "(")
    )
    .join("");

module.exports = duplicateEncode;
