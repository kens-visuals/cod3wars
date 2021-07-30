const sumIntervals = (intervals, result = []) => {
  intervals
    .sort((a, b) => a[0] - b[0])
    .map((el, i) => {
      if (intervals[0][1] >= el[0])
        intervals[0] = [intervals[0][0], Math.max(intervals[0][1], el[1])];
      else {
        result.push(intervals[0]);
        intervals[0] = el;
      }
      return el;
    });

  return [...result, intervals[0]]
    .map(([num1, num2]) => num2 - num1)
    .reduce((acc, cur) => acc + cur, 0);
};

module.exports = sumIntervals;
