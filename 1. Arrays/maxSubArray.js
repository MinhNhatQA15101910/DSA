var maxSubArray = function (nums) {
  let currSum = nums[0];
  let maxSum = currSum;

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};

var maxCrossingSum = function (nums, low, high) {
  if (low === high) return nums[low];
  if (high - low === 1) return nums[low] + nums[high];

  const mid = Math.floor((low + high) / 2);

  // Check left
  let sum = nums[mid];
  let leftSum = sum;
  for (let i = mid - 1; i >= low; i--) {
    sum += nums[i];
    leftSum = Math.max(leftSum, sum);
  }

  // Check right
  sum = nums[mid + 1];
  let rightSum = sum;
  for (let i = mid + 2; i <= high; i++) {
    sum += nums[i];
    rightSum = Math.max(rightSum, sum);
  }

  return leftSum + rightSum;
};

var getMaxSum = function (nums, low, high) {
  if (low === high) return nums[low];
  if (high - low === 1) {
    return Math.max(nums[low], nums[high], nums[low] + nums[high]);
  }

  const mid = Math.floor((low + high) / 2);

  const lss = getMaxSum(nums, low, mid);
  const rss = getMaxSum(nums, mid + 1, high);
  const css = maxCrossingSum(nums, low, high);

  return Math.max(lss, rss, css);
};

var maxSubArray2 = function (nums) {
  const low = 0;
  const high = nums.length - 1;
  return getMaxSum(nums, low, high);
};

console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
