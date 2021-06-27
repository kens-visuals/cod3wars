const SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count, n = 0, str = "") {
    if (count < 0) {
      return `${count}<0`;
    } else if (count === 0) {
      return `${count}=0`;
    }

    for (let i = 0; i <= count; i++) {
      n += i;
      str += i + "+";
    }

    return `${str.slice(0, -1)} = ${n}`;
  };

  return SequenceSum;
})();

module.exports = SequenceSum;
