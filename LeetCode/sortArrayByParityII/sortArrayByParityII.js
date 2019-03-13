/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParityII = function(A) {
  let i = 0, j = 1 
  let result = []

  A.forEach(v => {
    if (v & 1) {
      result[j] = v
      j += 2
    } else {
      result[i] = v
      i += 2
    }
  })

  return result
}

console.log(sortArrayByParityII([4,2,5,7]))

// https://leetcode.com/problems/squares-of-a-sorted-array/
// https://leetcode.com/problems/3sum-smaller/
// https://leetcode.com/problems/insert-delete-getrandom-o1/
