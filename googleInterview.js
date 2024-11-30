const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

function containsCommonItem2(arr1, arr2) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];
    if (!map[item]) {
      map[item] = true;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const item = arr2[i];
    if (map[item]) return true;
  }

  return false;
}

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(containsCommonItem3(array1, array2));
