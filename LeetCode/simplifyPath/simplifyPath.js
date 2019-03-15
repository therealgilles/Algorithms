/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function(path) {
  let result = path
  let savedResult

  while (savedResult !== result) {
    savedResult = result
    result = result
      .replace(/\/(\.\/)+/g, '/') // replace /./ by /
      .replace(/\/+/g, '/') // replace multiple slashes by /
      .replace(/(.)\/+$/, '$1') // remove trailing slashes
      .replace(/(.)\/\.$/g, '$1') // remove trailing /./ or /.
      .replace(/^\/\.\.?(\/|$)/g, '/') // going up from root is no-op
      .replace(/[^/]+\/\.\.($|\/)/, '$1')
  }

  return result
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
