function add(num1, num2) {
  num1 = num1.toString().split("").map(Number);
  num2 = num2.toString().split("").map(Number);

  if (num1.length === num2.length) {
    return parseInt(num1.map((el, i) => el + num2[i]).join(""));
  } else {
    const newArr = [num1, num2].sort((a, b) => a.length - b.length);
    newArr[0].unshift(0);
    return parseInt(num1.map((el, i) => el + num2[i]).join(""));
  }
}

module.exports = add;
