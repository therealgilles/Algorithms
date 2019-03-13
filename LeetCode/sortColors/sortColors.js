/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
  let n0 = 0, n1 = 0, n2 = 0
  let i = 0

  while (i < nums.length - n2) {
    if (nums[i] === 2) {
      const idx = nums.length - n2 - 1
      if (idx <= i) {
        i += 1
        continue
      }
      const swap = nums[idx]
      nums[idx] = 2
      nums[i] = swap
      n2 += 1
    } else if (nums[i] === 1) {
      const idx = nums.length - n2 - n1 - 1
      if (idx <= i) {
        i += 1
        continue
      }
      const swap = nums[idx]
      nums[idx] = 1
      nums[i] = swap
      n1 += 1
    } else if (nums[i] === 0) {
      const idx = n0
      if (idx === i) {
        i += 1
        continue
      }
      const swap = nums[idx]
      nums[idx] = 0
      nums[i] = swap
      n0 += 1 
    }
  }

  return nums 
}

console.log(sortColors([2,0,2,1,1,0]))
console.log(sortColors([2,0,0,1,0,2,0,1,2,2,1,0,1,0]))

// https://leetcode.com/problems/wiggle-sort/
// https://leetcode.com/problems/wiggle-sort-ii/
