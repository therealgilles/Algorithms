/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  let i1 = m - 1
  let i2 = n - 1

  // build the array from the end
  for (let i = m + n - 1; i >= 0; i -= 1) {
    if (i2 < 0) break

    if (nums1[i1] > nums2[i2]) {
      nums1[i] = nums1[i1]
      i1 -= 1
    } else {
      nums1[i] = nums2[i2]
      i2 -= 1
    }
  }

  return nums1
}

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(merge([0], 0, [1], 1))

// https://leetcode.com/problems/interval-list-intersections/
// https://leetcode.com/problems/merge-two-sorted-lists/
