/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function(nums) {
  const result = []

  for (let i = 0, start = nums[0]; i < nums.length; i += 1) {
    if (nums[i] + 1 !== nums[i + 1]) {
      result.push((start === nums[i]) ? `${start}` : `${start}->${nums[i]}`)
      start = nums[i + 1]
    }
  }

  return result
}

console.log(summaryRanges([0,1,2,4,5,7]))
console.log(summaryRanges([0,2,3,4,6,8,9]))

// https://leetcode.com/problems/missing-ranges/
