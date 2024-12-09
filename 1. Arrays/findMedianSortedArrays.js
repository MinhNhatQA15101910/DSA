var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length === 0 && nums2.length === 0) return undefined;

  const length = nums1.length + nums2.length;
  let ptr1 = 0;
  let ptr2 = 0;

  if (length % 2 !== 0) {
    let result = 0;
    while (nums1[ptr1] !== undefined || nums2[ptr2] !== undefined) {
      if (nums2[ptr2] === undefined || nums1[ptr1] <= nums2[ptr2]) {
        result = nums1[ptr1++];
      } else {
        result = nums2[ptr2++];
      }

      if (ptr1 + ptr2 - 1 === Math.floor(length / 2)) return result;
    }
  }

  let result = 0;

  while (nums1[ptr1] !== undefined || nums2[ptr2] !== undefined) {
    if (nums2[ptr2] === undefined || nums1[ptr1] <= nums2[ptr2]) {
      if (ptr1 + ptr2 === length / 2) return result + nums1[ptr1] / 2;

      result = nums1[ptr1++];
    } else {
      if (ptr1 + ptr2 === length / 2) return result + nums2[ptr2] / 2;

      result = nums2[ptr2++];
    }

    if (ptr1 + ptr2 - 1 === length / 2 - 1) result /= 2;
  }
};

console.log(findMedianSortedArrays([0, 0], [0, 0]));
