const decipherThis = (str) =>
  str.replace(
    /\b(\d{2,3})(\w?)(\w*?)(\w?)\b/g,
    (_, digit, fisrt, mid, last) =>
      String.fromCharCode(digit) + last + mid + fisrt
  );

module.exports = decipherThis;
