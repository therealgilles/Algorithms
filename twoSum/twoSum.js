/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

const twoSumWithMap = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    let matching = target - nums[i];

    if (map.has(matching)) {
      return [map.get(matching), i];
    }

    map.set(nums[i], i);
  }

  return null;
}

console.log(twoSumWithMap([2, 7, 11, 15], 9));
