function smallestDiff(arr1, arr2) {
  let res = Number.MAX_SAFE_INTEGER;

  if (arr1.length === 0 && arr2.length === 0) return -1;
  else if (arr1.length > 0 && arr2.length === 0) return Math.min(...arr1);
  else if (arr1.length === 0 && arr2.length > 0) return Math.min(...arr2);

  for (let i = 0; i < arr1.length; i++)
    for (let j = 0; j < arr2.length; j++)
      if (Math.abs(arr1[i] - arr2[j]) < res) res = Math.abs(arr1[i] - arr2[j]);

  return res;
}

module.exports = smallestDiff;
