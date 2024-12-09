var lengthOfLongestSubstring = function (s) {
  let map = {};
  let maxLength = 0;
  for (let low = 0, high = 0; high < s.length; high++) {
    if (map[s[high]] !== undefined && map[s[high]] >= low) {
      low = map[s[high]] + 1;
    }

    maxLength = Math.max(maxLength, high - low + 1);

    map[s[high]] = high;
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
