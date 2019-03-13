/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
  if (!numbers || (numbers.length < 2)) return 'error'
  let i = 1, j = 2

  while (numbers[i-1] + numbers[j-1] !== target) {
    if ((j >= numbers.length) || (numbers[i-1] + numbers[j-1] > target)) {
      i += 1
      if (i >= numbers.length) return 'error'
      j = i + 1
    } else {
      j += 1
    }
  }

  return [i, j]
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,7,11,15], 22))
console.log(twoSum([2,7,11,15], 18))
