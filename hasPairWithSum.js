// Naive
function hasPairWithSum(arr, sum) {
  const result = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  return result;
}

// Better
function hasPairWithSum2(arr, sum) {
  const result = [];
  const len = arr.length;

  const mySet = new Set();
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      result.push([sum - arr[i], arr[i]]);
    }

    mySet.add(sum - arr[i]);
  }

  return result;
}

console.log(hasPairWithSum([6, 4, 3, 2, 1, 7, 8, 5, 10, -1], 9));
