//
// isMatch
// 
// Implement regex match with support for . and *
//

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

const isMatch = (s, p) => {
  // pattern is '.*' and matches anything
  if (p === '.*') {
    return true
  }

  // no special characters in pattern
  if (!p.includes('.') && !p.includes('*')) {
    return (s === p)
  }

  if ((p.length > 1) && p.charAt(1) === '*') {
    //    match corresponding character in string and recurse on what's left of string, same pattern
    // OR
    //    match nothing in string and recurse on rest of pattern
    const matchingFirstChar = (s.charAt(0) === p.charAt(0)) || (p.charAt(0) === '.')
    return ((s.length && matchingFirstChar) ? isMatch(s.slice(1), p) : false) || isMatch(s, p.slice(2))
  }

  // if first string character matches pattern first character or pattern first character is '.',
  // recurse on rest of string and pattern
  if ((p.length > 0) && (s.length > 0) && ((p.charAt(0) === '.') || (p.charAt(0) === s.charAt(0)))) {
    return isMatch(s.slice(1), p.slice(1))
  }

  return false
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
