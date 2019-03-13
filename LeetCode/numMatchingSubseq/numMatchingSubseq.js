/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */

const test = require('./test.js')

const numMatchingSubseq = function(S, words) {
  const isSubsequence = function(s, t, idx = 0) {
    if (!s) return true
    if (s && !t) return false

    const c = s.charAt(0)
    let i = t.indexOf(c, idx)
    if ((i !== -1) && isSubsequence(s.slice(1), t, i + 1)) return true

    return false
  }

  return words.filter(w => isSubsequence(w, S)).length
}

console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"]))
console.log(numMatchingSubseq(test.S, test.words))

// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// https://leetcode.com/problems/shortest-word-distance/
// https://leetcode.com/problems/sort-array-by-parity-ii/
