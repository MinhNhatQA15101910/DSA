var reverse = function (nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;

    start++;
    end--;
  }
};

var rotate = function (nums, k) {
  if (nums.length < 2) return nums;

  if (k > nums.length) k %= nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};
