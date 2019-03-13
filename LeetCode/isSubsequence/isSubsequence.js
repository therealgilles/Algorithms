/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t, idx = 0) {
  if (!s) return true
  if (s && !t) return false

  const c = s.charAt(0)
  let i = t.indexOf(c, idx)
  if ((i !== -1) && isSubsequence(s.slice(1), t, i + 1)) return true

  return false
}

console.log(isSubsequence('abc', 'ahbgdc'))
console.log(isSubsequence('axc', 'ahbgdc'))

// https://leetcode.com/problems/number-of-matching-subsequences/
