/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function(path) {
  const result = []

  path.split('/').forEach(p => {
    if (p === '..') {
      result.pop()
    } else if (p !== '.' && p.length) {
      result.push(p)
    }
  })

  return '/' + result.join('/')
}

console.log(simplifyPath('/home/'))
console.log(simplifyPath('/../'))
console.log(simplifyPath('/home//foo/'))
console.log(simplifyPath('/a/../b'))
console.log(simplifyPath('/a/./b/../../c/'))
console.log(simplifyPath('/a/../../b/../c//.//'))
console.log(simplifyPath('/a//b////c/d//././/..'))
console.log(simplifyPath('/.'))
console.log(simplifyPath('/.././em/jl///../.././../E/'))

// https://leetcode.com/problems/asteroid-collision/
// https://leetcode.com/problems/daily-temperatures/
// https://leetcode.com/problems/odd-even-jump/
