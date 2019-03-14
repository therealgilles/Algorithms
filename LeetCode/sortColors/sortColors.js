/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
  let [ head, tail, i ] = [ 0, nums.length - 1, 0 ]

  while (i <= tail) {
    if (nums[i] === 0) {
      [ nums[head], nums[i], head ] = [ nums[i], nums[head], head + 1 ]
    } else if (nums[i] === 2) {
      [ nums[tail], nums[i], tail ] = [ nums[i], nums[tail], tail - 1 ]
      i -= 1
    }
    i += 1
  }

  return nums 
}

console.log(sortColors([2,0,2,1,1,0]))
console.log(sortColors([2,0,0,1,0,2,0,1,2,2,1,0,1,0]))

// https://leetcode.com/problems/wiggle-sort/
// https://leetcode.com/problems/wiggle-sort-ii/
