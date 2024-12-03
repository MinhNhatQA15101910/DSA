function mergeSortedArrays(arr1, arr2) {
  if (!arr1 || !arr2) {
    console.log("Something went wrong!");
  }

  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const result = [];
  let i1 = 0,
    i2 = 0;
  const len1 = arr1.length;
  const len2 = arr2.length;

  while (i1 < len1 && i2 < len2) {
    if (arr1[i1] < arr2[i2]) {
      result.push(arr1[i1++]);
    } else {
      result.push(arr2[i2++]);
    }
  }

  for (let i = i1; i < len1; i++) {
    result.push(arr1[i]);
  }

  for (let i = i2; i < len2; i++) {
    result.push(arr2[i]);
  }

  return result;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
