var moveZeroes = function (nums) {
  if (nums.length === 0) return nums;

  let ptr1 = 0;
  let ptr2 = 1;

  while (ptr2 < nums.length) {
    let num1 = nums[ptr1];
    let num2 = nums[ptr2];

    if (num1 === 0) {
      while (num2 === 0 && ptr2 < nums.length) {
        num2 = nums[++ptr2];
      }

      nums[ptr1] = num2;
      nums[ptr2] = num1;
    }

    ptr1++;
    ptr2++;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
