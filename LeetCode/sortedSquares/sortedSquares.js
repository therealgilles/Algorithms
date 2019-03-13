/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function(A) {
  return A.sort((a, b) => Math.abs(a) - Math.abs(b)).map(v => v * v)
}

console.log(sortedSquares([-4,-1,0,3,10]))
console.log(sortedSquares([-7,-3,2,3,11]))

// https://leetcode.com/problems/merge-sorted-array/
// https://leetcode.com/problems/sort-transformed-array/
