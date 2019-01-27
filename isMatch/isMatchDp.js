//
// isMatchDp
//
// Implement regex match with support for . and *, using dynamic programming
//

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  const memo = []

  const dp = (i, j) => {
    let res

    if (!memo[i] || (memo[i][j] === undefined)) {

      if (j === p.length) { // we've reached the end of the pattern
        res = (i === s.length)
      } else {
        // do we have a match on the first string character?
        let firstMatch = (i < s.length) && (['.', s.charAt(i)].indexOf(p.charAt(j)) !== -1)

        // if ((j+1 < p.length) && (p.charAt(j+1) === '*')) { // does the pattern have a subsequent character?
        if (p.charAt(j+1) === '*') { // does the pattern have a subsequent character?
          res = dp(i, j+2) || (firstMatch && dp(i+1, j))
        } else {
          res = firstMatch && dp(i+1, j+1)
        }
      }

      Array.isArray(memo[i]) || (memo[i] = []) // create array if necessary
      memo[i][j] = res
    }

    return memo[i][j]
  }

  return dp(0, 0)
}

const debug = false

if (debug) {
  console.log(isMatch('aa', 'a'), false)
  console.log(isMatch('aa', 'a*'), true)
  console.log(isMatch('ab', '.*'), true)
  console.log(isMatch('aab', 'c*a*b*'), true)
  console.log(isMatch('mississippi', 'mis*is*p*.'), false)
  console.log(isMatch('bbbba', '.*a*a'), true)
}
