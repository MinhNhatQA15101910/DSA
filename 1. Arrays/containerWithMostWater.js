var maxArea = function (height) {
  let low = 0;
  let high = height.length - 1;
  let maxArea = 0;
  while (low < high) {
    maxArea = Math.max(
      maxArea,
      (high - low) * Math.min(height[low], height[high])
    );

    if (height[low] < height[high]) low++;
    else high--;
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
