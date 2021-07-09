const fizzBuzzFactory = (arr) => (num) => {
  let newArr = [null];

  for (var i = 0; i < arr.length; i++)
    if (num % arr[i][0] === 0) newArr = arr[i][0] > newArr[0] ? arr[i] : newArr;

  return newArr[1] !== undefined ? newArr[1] : `${num}`;
};
